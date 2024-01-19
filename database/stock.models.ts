import { Schema, model, models } from "mongoose";

export interface IStock extends Document {
  PId: Schema.Types.ObjectId;
  SellerId: Schema.Types.ObjectId;
  Quantity: number;
  Expiry: Date;
}
const StockSchema: Schema = new Schema({
  PId: { type: Schema.Types.ObjectId, required: true },
  SellerId: { type: Schema.Types.ObjectId, required: true },
  Quantity: { type: Number, required: true },
  Expiry: { type: Date, required: true },
});

const Stock = models.Stock || model<IStock>("Stock", StockSchema);

export default Stock;
