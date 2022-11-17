import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  async CreateOrder(id: number) {
    console.log(id);
    
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );
    return result;
  }

  async insertOrder(product: number, id: number) {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [id, product],
    );
    return result;
  }
}