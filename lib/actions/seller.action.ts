"use server";
import Seller from "@/database/seller.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

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
export async function createSeller(userData: any) {
  try {
    await connectToDatabase();
    const newSeller = await Seller.create(userData);
    return JSON.stringify(newSeller.toJSON());
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}

export async function updateSeller(userData: {
  clerkId: string;
  updateData: any;
  path: string;
}) {
  try {
    await connectToDatabase();
    const { clerkId, updateData, path } = userData;
    const user = await Seller.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}

export async function deleteSeller(id: string) {
  try {
    await connectToDatabase();
    const user = await Seller.findOne({ clerkId: id });
    if (!user) {
      throw new Error("Seller not found");
    }
    //TODO:
    // const userQuestions = await Question.find({ author: user._id }).distinct(
    //   "_id",
    // );
    // await Question.deleteMany({ author: user._id });
    const deletedSeller = await Seller.findByIdAndDelete(user._id);
    return deletedSeller;
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}
