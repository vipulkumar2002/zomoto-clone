import Mongoose from "mongoose";

const ImageSchema = new Mongoose.Schema(
  {
    Images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImageModel = Mongoose.model("Images", ImageSchema);
