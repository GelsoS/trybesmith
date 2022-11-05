import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  public userService = new UserService();

  async Create(req:Request, res:Response) {
    const r = await this.userService.create(req.body);
    res.status(201).json({ token: r });
  }
}