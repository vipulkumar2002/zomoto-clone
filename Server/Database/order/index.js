import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    orderDetails: [
      {
        food: { type: mongoose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true },
        paymoded: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          ItemTotal: { typr: String, required: true },
          promo: { typr: String, required: true },
          tax: { typr: String, required: true },
        },
      },
    ],
    orderRating: { typr: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model("Orders", OrderSchema);
