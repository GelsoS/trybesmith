import { Router } from 'express';
import OrderController from '../controller/order.constroller';

const router = Router();
const orderController = new OrderController();
router.get('/', orderController.OrderList.bind(orderController));

export default router;