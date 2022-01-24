import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import UserController from '../resources/user/user.controller';

const userRouter = Router();

userRouter.post('/register', new UserController().createUser);

export default userRouter;
