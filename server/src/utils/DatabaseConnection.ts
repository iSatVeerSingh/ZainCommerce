import mongoose from 'mongoose';
import config from '../config/config';

const ConnectDatabase = async () => {
  try {
    mongoose.connect(config.MONGODB_URI, {
      dbName: config.DB_NAME,
    });
    console.log('Database successfully connected');
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDatabase;
