import { Request, Response } from 'express';
import Product from '../schemas/product.schema';
import { GetErrorMessage } from '../utils/errorHandler';
import { HttpStatus } from '../utils/httpStatus';

export const CreateNewProduct = async (req: Request, res: Response) => {
  const newProduct = new Product(req.body);

  try {
    const result = await newProduct.save();
    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: result,
    });
  } catch (err) {
    return res.status(400).json(GetErrorMessage(err));
  }
};
