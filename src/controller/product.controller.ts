import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  public productService = new ProductService();

  async Create(req: Request, res: Response) {
    const id = await this.productService.create(req.body);
    res.status(201).json({ id, ...req.body });
  }

  async List(req: Request, res:Response) {
    const list = await this.productService.List();
    res.status(200).json(list);
  }
}