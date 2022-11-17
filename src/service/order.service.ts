import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/produtos';
import OrderModel from '../models/order.model';
import { validaProductsIds } from '../utils/validateJoi';

export default class OrderService {
  public orderModel = new OrderModel();

  public async ListOrder(): Promise<RowDataPacket[]> {
    const result = await this.orderModel.ordersList();
    return result;
  }

  public async Create(id: number, { productsIds }: Order) {
    const isProductsIdsValid = validaProductsIds(productsIds);
    if (isProductsIdsValid) return isProductsIdsValid;

    const { insertId } = await this.orderModel.CreateOrder(id);    
    const insertOrderProductPromises = productsIds.map(
      (product) => this.orderModel.insertOrder(product, insertId),
    );
    await Promise.all(insertOrderProductPromises);
    return { status: 201, message: { userId: id, productsIds } };
  }
} 