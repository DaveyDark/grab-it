import { Schema } from "mongoose";

export interface ICustomers extends Document {
  CId: Schema.Types.ObjectId;
  Name: string;  
  Address: string;
  
  Pincode: number;
  City: string;
  State: string;
  Latitude: number;
  Longitude: number; 
}
const CustomersSchema: Schema = new Schema({ 
    CId : { type: Schema.Types.ObjectId, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Pincode: { type: Number, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Latitude: { type: Number, required: true },
    Longitude: { type: Number, required: true },
    });
