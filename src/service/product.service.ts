import { Products, Produto, ProdutoReturn } from '../interfaces/produtos';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async create(prod:Produto): Promise<ProdutoReturn> {
    const result = await this.productModel.create(prod);
    return result;
  }

  public async List(): Promise<Products[]> {
    const list = await this.productModel.List();
    return list;
  }
}