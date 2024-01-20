"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Product from "@/database/product.model";
import { FilterQuery } from "mongoose";

export async function newProduct(productData: any) {
  try {
    await connectToDatabase();
    const newProduct = await Product.create(productData);
    return JSON.stringify(newProduct.toJSON());
  } catch (err: any) {
    console.error(`Error getting product: ${err.message}`);
    throw err;
  }
}

export async function updateProduct(productData: any) {
  try {
    await connectToDatabase();
    const { id, updateData, path } = productData;
    const product = await Product.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (err: any) {
    console.error(`Error getting product: ${err.message}`);
    throw err;
  }
}

export async function getProducts(params: any) {
  try {
    await connectToDatabase();
    const query: FilterQuery<typeof Product> = {};
    if (params.q) {
      query.$or = [
        { name: { $regex: params.q, $options: "i" } },
        { description: { $regex: params.q, $options: "i" } },
      ];
    }
    let sort = {};
    //TODO: implement sort
    const products = await Product.find(query);
    return products;
  } catch (err: any) {
    console.error(`Error getting product: ${err.message}`);
    throw err;
  }
}
