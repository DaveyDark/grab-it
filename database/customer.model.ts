import { Schema, model, models } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  clerkId: string;
}
const CustomerSchema: Schema = new Schema({
  clerkId: { type: String },
  name: { type: String },
  address: { type: String },
  pincode: { type: Number },
  city: { type: String },
  state: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

const Customer =
  models.Customer || model<ICustomer>("Customer", CustomerSchema);

export default Customer;
