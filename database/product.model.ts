import { Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  MRP: number;
  PID:Schema.Types.ObjectId;  
  Description: string;

}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },  
  MRP: { type: Number, required: true },
  PID: { type: Schema.Types.ObjectId, required: true },
  Description: { type: String },
});
