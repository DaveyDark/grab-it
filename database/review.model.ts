import { Schema, model, models } from "mongoose";

export interface IReview extends Document {
  PId: Schema.Types.ObjectId;
  rating: number;
  review: string;
}
const ReviewSchema: Schema = new Schema({
  PId: { type: Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

const Review = models.Review || model<IReview>("Review", ReviewSchema);

export default Review;
