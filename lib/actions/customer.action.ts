"use server";
import { connectToDatabase } from "../mongoose";
import Customer from "@/database/customer.model";
import { revalidatePath } from "next/cache";

export async function createUser(userData: any) {
  try {
    await connectToDatabase();
    const newUser = await Customer.create(userData);
    return JSON.stringify(newUser.toJSON());
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}

export async function updateUser(userData: {
  clerkId: string;
  updateData: any;
  path: string;
}) {
  try {
    await connectToDatabase();
    const { clerkId, updateData, path } = userData;
    const user = await Customer.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}

export async function deleteUser(id: string) {
  try {
    await connectToDatabase();
    const user = await Customer.findOne({ clerkId: id });
    if (!user) {
      throw new Error("User not found");
    }
    const deletedUser = await Customer.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    await connectToDatabase();

    const user = await Customer.findOne({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err: any) {
    console.error(`Error getting user: ${err.message}`);
    throw err;
  }
}
