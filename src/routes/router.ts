import { Router } from 'express';
import productRouter from './products.router';
import usersRouter from './users.router';
import ordersRouter from './orders.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', usersRouter);
routers.use('/orders', ordersRouter);

export default routers;