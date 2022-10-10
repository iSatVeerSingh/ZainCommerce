import { NextFunction, Request, Response } from 'express';
import { LoginType, SignupSellerType } from '../../types';
import { GetErrorMessage } from '../../utils/errorHandler';

export const CheckSellerAuthData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path === '/signup') {
    const sellerData: SignupSellerType = req.body;
    const authErrors: Partial<SignupSellerType> = {};

    if (!sellerData.businessName || sellerData.businessName.length < 4) {
      authErrors.businessName =
        'business name must be at least 4 characters long';
    }

    if (!sellerData.businessManager || sellerData.businessManager.length < 4) {
      authErrors.businessManager =
        'business manager name must be at least 4 characters long';
    }

    if (
      !sellerData.email ||
      !/^[a-z0-9\.]+@[a-z0-9]+\.[a-z]+$/.test(sellerData.email)
    ) {
      authErrors.email = 'please provide a valid email';
    }

    if (!sellerData.username || sellerData.username.length < 4) {
      authErrors.username = 'username must be at least 4 characters long';
    }

    if (!sellerData.password || sellerData.password.length < 8) {
      authErrors.password = 'password must be at least 8 characters long';
    }

    if (
      !sellerData.confirmPassword ||
      (sellerData.password &&
        sellerData.confirmPassword !== sellerData.password)
    ) {
      authErrors.confirmPassword = 'password does not match';
    }

    if (Object.keys(authErrors).length !== 0) {
      return res.status(400).json(GetErrorMessage(authErrors));
    }
  }

  if (req.path === '/login') {
    const sellerData: LoginType = req.body;
    const authErrors: Partial<LoginType> = {};

    if (!sellerData.username || sellerData.username.length < 4) {
      authErrors.username = 'username must be at least 4 characters long';
    }

    if (!sellerData.password || sellerData.password.length < 8) {
      authErrors.password = 'password must be at least 8 characters long';
    }

    if (Object.keys(authErrors).length !== 0) {
      return res.status(400).json(GetErrorMessage(authErrors));
    }
  }
  return next();
};
