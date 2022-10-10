import { Schema, model } from 'mongoose';

interface ISeller {
  businessName: string;
  businessManager: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  address?: {
    line1: string;
    city: string;
    state: string;
    pincode: number;
  };
}

const SellerSchema = new Schema<ISeller>({
  businessName: {
    type: String,
    required: [true, 'Business name is required'],
  },
  businessManager: {
    type: String,
    required: [true, 'Business manager name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  address: {
    line1: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
    },
  },
});

const Seller = model<ISeller>('seller', SellerSchema);

export default Seller;
