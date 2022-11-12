import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import { cadastro } from '../utils/validateJoi';

export default class ProductController {
  public productService = new ProductService();

  async Create(req: Request, res: Response) {
    const result = cadastro(req.body);
    if (result?.status) return res.status(result.status).json(result.message);
    
    const id = await this.productService.create(req.body);
    res.status(201).json({ id, ...req.body });
  }

  async List(req: Request, res:Response) {
    const list = await this.productService.List();
    res.status(200).json(list);
  }
}