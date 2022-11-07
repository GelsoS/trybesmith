import { RowDataPacket } from 'mysql2';
import OrderModel from '../models/order.model';

export default class OrderService {
  public orderModel = new OrderModel();

  public async ListOrder(): Promise<RowDataPacket[]> {
    const result = await this.orderModel.ordersList();
    return result;
  }
}