import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  try {
    if (mongoose.connection.readyState === 1) {
      isConnected = true;
      return;
    }

    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
