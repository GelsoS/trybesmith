import { Router } from 'express';
import productRouter from './products.router';
import usersRouter from './users.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', usersRouter);

export default routers;