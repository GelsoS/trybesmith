import { Router } from 'express';
import productRouter from './products.router';
import usersRouter from './users.router';
import ordersRouter from './orders.router';
import loginRouter from './login.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', usersRouter);
routers.use('/orders', ordersRouter);
routers.use('/login', loginRouter);

export default routers;