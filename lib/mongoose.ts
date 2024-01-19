import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.error("MONGODB_URL not found");
    return;
  }

  if (isConnected) {
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    console.log("Connected to database");
    isConnected = true;
  } catch (err) {
    console.error("Error connecting to database: ", err);
  }
};
