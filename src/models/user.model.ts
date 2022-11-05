import { ResultSetHeader } from 'mysql2';
import { People } from '../interfaces/produtos';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async create(obj: People): Promise<number> {
    const { username, classe, level, password } = obj;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return insertId;
  }
}