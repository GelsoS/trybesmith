import { Request, Response } from 'express';
import OrderService from '../service/order.service';

export default class OrderController {
  public orderService = new OrderService();

  async OrderList(req: Request, res: Response) {
    const list = await this.orderService.ListOrder();
    res.status(200).json(list);
  }
}