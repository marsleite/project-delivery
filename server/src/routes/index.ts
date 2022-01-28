import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import userRouter from './user.routes';

const router = Router();

router.use('/users', userRouter);

export default router;
