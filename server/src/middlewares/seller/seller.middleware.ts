import { NextFunction, Request, Response } from 'express';
import Seller from '../../schemas/seller.schema';
import { GetErrorMessage } from '../../utils/errorHandler';
import { HttpStatus } from '../../utils/httpStatus';

export const ValidateSellerId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sellerId } = req.params;

  try {
    const seller = await Seller.findById(sellerId).select({
      businessName: 1,
      id: 1,
    });
    if(!seller) {
      return res.status(HttpStatus.BAD_REQUEST).json(GetErrorMessage('Seller not found'))
    }
    return next();
  } catch (err) {
    return res.status(HttpStatus.BAD_REQUEST).json(GetErrorMessage('something went wrong'));
  }
};
