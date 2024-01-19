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

export async function updateSellerProfile(params: any) {
  try {
    await connectToDatabase();

    await Seller.findOneAndUpdate({ _id: params.id }, params, {
      new: true,
    });
  } catch (err: any) {
    console.error(`Error updating seller: ${err}`);
    throw new Error(err);
  }
}
