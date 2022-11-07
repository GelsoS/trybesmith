import { RowDataPacket } from 'mysql2';
import { LoginUsr } from '../interfaces/produtos';
import mysql from './connection';

export default class LoginModel {
  private connection = mysql;

  async Login(body: LoginUsr) {
    const { username, password } = body;
    
    const [[result]] = await this.connection.execute<RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Users 
           WHERE username = "${username}" AND password = "${password}";`,
    );
    return result;
  }
}