import { Schema } from "mongoose";

export interface ICustomers extends Document {
  Name: string;
  Address: string;

  Pincode: number;
  City: string;
  State: string;
  Latitude: number;
  Longitude: number;
}
const CustomersSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  Pincode: { type: Number, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
});
