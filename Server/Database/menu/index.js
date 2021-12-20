import mongooes from "mongoose";

const MenuSchema = new mongooes.Schema(
  {
    menu: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongooes.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
      {
        type: mongooes.Types.ObjectId,
        ref: "Foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MenuModel = mongooes.model("Menu", MenuSchema);
