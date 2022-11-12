import { Request, Response } from 'express';
import UserService from '../service/user.service';
import { user } from '../utils/validateJoi';

export default class UserController {
  public userService = new UserService();

  async Create(req:Request, res:Response) {
    const re = user(req.body);
    if (re?.status) return res.status(re.status).json(re.message);
    const r = await this.userService.create(req.body);
    res.status(201).json({ token: r });
  }
}