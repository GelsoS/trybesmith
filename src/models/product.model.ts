import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { Produto } from '../interfaces/produtos';

export default class ProductModel {
  private connection = mysql; // atributo

  async create(obj: Produto): Promise<number> {
    const { name, amount } = obj;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return insertId;
  }

  async List():Promise<ResultSetHeader> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  }
}