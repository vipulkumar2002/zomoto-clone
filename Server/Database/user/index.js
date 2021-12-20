import Mongoose from "mongoose";

const UserSechema = new Mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    passward: { type: Number },
    address: [{ detail: { type: String } }, { for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

export const UserModel = Mongoose.model("Users", UserSechema);
