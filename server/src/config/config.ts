import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/',
  DB_NAME: process.env.DB_NAME || 'test',
};
