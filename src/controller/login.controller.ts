import { Request, Response } from 'express';
import LoginService from '../service/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async Login(req:Request, res: Response) {
    const { status, message } = await this.loginService.Login(req.body);
    res.status(status).json(message);
  }
}