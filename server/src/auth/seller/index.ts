import { Router } from 'express';
import { CreateSellerAccount, LoginSeller } from './controller';

const SellerAuthRouter = Router();

SellerAuthRouter.get('/', (req, res) => {
  res.send('This is seller auth router00000000');
});

SellerAuthRouter.post('/signup', CreateSellerAccount);

SellerAuthRouter.post('/login', LoginSeller)

export default SellerAuthRouter;
