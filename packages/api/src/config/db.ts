import mongoose from "mongoose";
import { logger } from "../server";
import { env } from "./envConfig";

export const connectToDB = async () => {
  const { MONGODB_URI } = env;
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("🌐 Connected to MongoDB Successfully ✅", {
      name: "Database Startup",
    });
  } catch (error) {
    logger.error(" ❌ MongoDB connection failed :", error);
  }
};
