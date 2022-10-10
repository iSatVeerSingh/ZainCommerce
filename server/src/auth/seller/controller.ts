import { Request, Response } from 'express';
import Seller from '../../schemas/seller.schema';
import { SignupSellerType } from '../../types';
import { encryptPassword } from '../../utils/encryption';
import { GetErrorMessage } from '../../utils/errorHandler';
import { HttpStatus } from '../../utils/httpStatus';

export const CreateSellerAccount = async (req: Request, res: Response) => {
  const sellerData: SignupSellerType = req.body;

  const hashedPassword = await encryptPassword(sellerData.password);

  const newSeller = new Seller({ ...sellerData, password: hashedPassword });

  try {
    const { id, username, businessName, businessManager } =
      await newSeller.save();
    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: { username, id, businessName, businessManager },
    });
  } catch (err) {
    return res.status(HttpStatus.BAD_REQUEST).json(GetErrorMessage(err));
  }
};

export const LoginSeller = async (req: Request, res: Response) => {
  res.send('This is Login Seller');
};
