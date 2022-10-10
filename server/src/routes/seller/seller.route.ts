import { Router } from 'express';
import { CreateNewProduct } from '../../controllers/product.controller';

const SellerRouter = Router();

SellerRouter.get('/', (req, res) => {
  res.send('this is seller router after login');
});

SellerRouter.post('/products/new', CreateNewProduct);

export default SellerRouter;
