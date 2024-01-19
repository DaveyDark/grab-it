import Seller from "@/database/seller.model";
import { connectToDatabase } from "../mongoose";

export async function getIdFromClerkId(clerkId: string) {
  try {
    await connectToDatabase();

    const seller = await Seller.findOne({ clerkId });

    return seller?._id;
  } catch (err: any) {
    console.error(`Error fetchign seller id from db: ${err}`);
    throw new Error(err);
  }
}

export async function updateSellerProfile() {
  try {
    await connectToDatabase();
  } catch (err: any) {
    console.error(`Error connecting to database: ${err}`);
    throw new Error(err);
  }
}
