import { Router } from 'express';
import SellerRootRouter from './seller';

const RootRouter = Router();

RootRouter.get('/', (req, res) => {
  res.send('This is root router with /api');
});

RootRouter.use('/seller', SellerRootRouter);

export default RootRouter;
