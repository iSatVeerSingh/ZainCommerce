import { Schema, model } from 'mongoose';
import { BasicProductData, ProductRating, ProductReviews } from '../types';

interface IProduct extends BasicProductData, ProductRating, ProductReviews {
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: [true, 'product title is required'],
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'product description is required'],
  },
  category: {
    type: String,
    required: [true, 'product category is required'],
  },
  subCategory: {
    type: String,
    required: [true, 'product sub category is required'],
  },
  actualPrice: {
    type: Number,
    required: [true, 'product actual price is required'],
  },
  discount: {
    type: Number,
  },
  sellingPrice: {
    type: Number,
    required: [true, 'product selling price is required'],
  },
  tags: {
    type: [String],
  },
  sellerId: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  rating: {
    averageRating: {
      type: Number,
      default: 0,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    ratingStars: {
      '1star': {
        type: Number,
        default: 0,
      },
      '2star': {
        type: Number,
        default: 0,
      },
      '3star': {
        type: Number,
        default: 0,
      },
      '4star': {
        type: Number,
        default: 0,
      },
      '5star': {
        type: Number,
        default: 0,
      },
    },
  },
  reviews: {
    totalReviews: {
      type: Number,
      default: 0,
    },
    reviewsDetails: {
      nameOfReviewer: String,
      comment: String,
    },
  },
  productDetails: {
    type: Schema.Types.Map,
    required: [true, 'at least one product details is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

const Product = model<IProduct>('product', ProductSchema);

export default Product;
