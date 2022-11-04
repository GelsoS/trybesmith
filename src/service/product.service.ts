import { ResultSetHeader } from 'mysql2';
import { Produto } from '../interfaces/produtos';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async create(prod:Produto): Promise<number> {
    const result = await this.productModel.create(prod);
    return result;
  }

  public async List(): Promise<ResultSetHeader> {
    const list = await this.productModel.List();
    return list;
  }
}