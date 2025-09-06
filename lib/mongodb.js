// lib/mongodb.js
import mongoose from 'mongoose';

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect('mongodb://localhost:27017/bittree', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(" MongoDB connected using Mongoose");
  } catch (err) {
    console.error(" MongoDB connection error", err);
    process.exit(1);
  }
};
