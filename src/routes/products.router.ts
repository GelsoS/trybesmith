import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/', productController.Create.bind(productController));
router.get('/', productController.List.bind(productController));

export default router;