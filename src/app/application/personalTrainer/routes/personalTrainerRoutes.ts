import express, { Request, Response, Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { LoginController } from '../controllers/personalTrainer/loginController';
import { RegisterController } from '../controllers/personalTrainer/registerController';

const router: Router = express.Router();

router.post('/login', asyncHandler((req: Request, res: Response) => {
  const loginController: LoginController = new LoginController();

  return loginController.run(req, res);
}));

router.post('/register', asyncHandler((req: Request, res: Response) => {
  const registerController: RegisterController = new RegisterController();

  return registerController.run(req, res);
}));

export default router;
