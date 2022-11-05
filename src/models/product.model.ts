import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { Products, Produto, ProdutoReturn } from '../interfaces/produtos';

export default class ProductModel {
  private connection = mysql; // atributo

  async create(obj: Produto): Promise<ProdutoReturn> {
    const { name, amount } = obj;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, name, amount };
  }

  async List():Promise<Products[]> {
    const [result] = await this.connection.execute<Products[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  }
}