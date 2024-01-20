import { Schema, model, models } from "mongoose";

export interface IStock extends Document {
  pid: Schema.Types.ObjectId;
  sellerId: Schema.Types.ObjectId;
  quantity: number;
  expiry: Date;
  manufactured: Date;
}
const StockSchema: Schema = new Schema({
  pid: { type: Schema.Types.ObjectId, required: true },
  sellerId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  expiry: { type: Date, required: true },
  manufactured: { type: Date, required: true },
});

const Stock = models.Stock || model<IStock>("Stock", StockSchema);

export default Stock;
