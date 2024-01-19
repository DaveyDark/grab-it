import { Schema } from "mongoose";

export interface ISeller extends Document {
  name: string;
  address: string;
  bussinessName: string;
  city: string;
  state: string;
  latitude: number;
  pincode: number;
  longitude: number;
}

const SellerSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  bussinessName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});
