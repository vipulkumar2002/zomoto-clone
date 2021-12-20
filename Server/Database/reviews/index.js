import mongooes from "mongoose";

const ReviewSchema = new mongooes.Schema(
  {
    food: { type: mongooes.Types.ObjectId, ref: "Foods" },
    restaurent: { type: mongooes.Types.ObjectId, ref: "Restaurants" },
    user: { type: mongooes.Types.ObjectId, ref: "Users" },
    photos: [{ type: mongooes.Types.ObjectId, ref: "Images" }],
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel = mongooes.model("Revies", ReviewSchema);
