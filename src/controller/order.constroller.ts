import { Request, Response } from 'express';
import OrderService from '../service/order.service';
import { validaToken } from '../utils/token';

export default class OrderController {
  public orderService = new OrderService();

  async OrderList(req: Request, res: Response) {
    const list = await this.orderService.ListOrder();
    res.status(200).json(list);
  }

  async OrderCreate(req: Request, res: Response) {
    const { authorization } = req.headers;
    const user = validaToken(authorization);
    if (user.status || !user.id) return res.status(user.status).json(user.message);
    
    const createdOrder = await this.orderService.Create(user.id, req.body);
    res.status(createdOrder.status).json(createdOrder.message);
  }
}