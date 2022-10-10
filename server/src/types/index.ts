import { Types } from 'mongoose';

export type SignupSellerType = {
  businessName: string;
  businessManager: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  username: string;
  password: string;
};

export interface BasicProductData {
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  subCategory: string;
  actualPrice: number;
  discount?: number;
  sellingPrice: number;
  tags?: Types.Array<string>;
  sellerId: string;
  sellerName: string;
  productDetails: Map<string, string>;
}

export interface ProductRating {
  rating: {
    averageRating: number;
    totalRatings: number;
    ratingStars: {
      '1star': number;
      '2star': number;
      '3star': number;
      '4star': number;
      '5star': number;
    };
  };
}

export interface ProductReviews {
  reviews: {
    totalReviews: number;
    reviewsDetails: {
      nameOfReviewer: string;
      comment: string;
    };
  };
}
