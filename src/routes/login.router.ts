import { Router } from 'express';
import LoginController from '../controller/login.controller';

const router = Router();
const loginController = new LoginController();

router.post('/', loginController.Login.bind(loginController));

export default router;