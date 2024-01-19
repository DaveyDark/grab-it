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
  Address: { type: String, required: true },
  Pincode: { type: Number, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
});

const Customer =
  models.Customer || model<ICustomer>("Customer", CustomerSchema);

export default Customer;
