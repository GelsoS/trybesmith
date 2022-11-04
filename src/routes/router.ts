import { Router } from 'express';
import ProductController from '../controller/product.controller';

const routers = Router();

const productController = new ProductController();

routers.post('/', productController.Create.bind(productController));

export default routers;