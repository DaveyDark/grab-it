import { Schema, model, models } from "mongoose";

export interface ICustomer extends Document {
  Name: string;
  Address: string;

  Pincode: number;
  City: string;
  State: string;
  Latitude: number;
  Longitude: number;
}
const CustomerSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Address: { type: String },
  Pincode: { type: Number },
  City: { type: String },
  State: { type: String },
  Latitude: { type: Number },
  Longitude: { type: Number },
});

const Customer =
  models.Customer || model<ICustomer>("Customer", CustomerSchema);

export default Customer;
