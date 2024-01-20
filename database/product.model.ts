import { Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  mrp: number;
  description: string;
  category: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  mrp: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
});

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
