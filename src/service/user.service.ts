import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { People } from '../interfaces/produtos';
import UserModel from '../models/user.model';

dotenv.config();

export default class UserService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public async create(body: People):Promise<string> {
    const id = await this.user.create(body);
    const ret = this.generateToken(+id, body);
    return ret;
  }

  public generateToken(id:number, user: People) {
    const payload = { id, ...user };
    
    return this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256', expiresIn: '1d',
    });
  }
}