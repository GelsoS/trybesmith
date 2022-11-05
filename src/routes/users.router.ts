import { Router } from 'express';
import UserController from '../controller/user.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();
const userController = new UserController();

router.post('/', userController.Create.bind(userController));

export default router;