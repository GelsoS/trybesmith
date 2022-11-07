import { RowDataPacket } from 'mysql2';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  async ordersList() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
       FROM Trybesmith.Orders AS O  INNER JOIN Trybesmith.Products AS P
       ON O.id = P.orderId GROUP BY O.id;`,
    );
    return result;
  }
}