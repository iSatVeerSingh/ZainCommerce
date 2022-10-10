import { Router } from 'express';
import SellerAuthRouter from '../../auth/seller';
import { CheckSellerAuthData } from '../../auth/seller/middleware';
import { ValidateSellerId } from '../../middlewares/seller/seller.middleware';
import SellerRouter from './seller.route';

const SellerRootRouter = Router();

SellerRootRouter.get('/', (req, res) => {
  res.send('This is seller router');
});

SellerRootRouter.use('/auth', CheckSellerAuthData, SellerAuthRouter);

SellerRootRouter.use('/:sellerId', ValidateSellerId, SellerRouter);

export default SellerRootRouter;
