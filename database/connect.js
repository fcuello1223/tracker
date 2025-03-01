import mongoose from "mongoose";

import { NODE_ENV, MONGO_URI } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error("MongoDB URI Undefined");
}

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected To Database In ${NODE_ENV} Mode`);
  } catch (error) {
    console.error("Error Connecting To Database");
    process.exit(1);
  }
};

export default connectToDB;
