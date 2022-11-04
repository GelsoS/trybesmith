import { Produto } from '../interfaces/produtos';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async create(prod:Produto): Promise<number> {
    const result = await this.productModel.create(prod);
    return result;
  }
}