import { model, models, Schema } from "mongoose";

export type ProductType = {
  id: string;
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  isActive: string;
  size: string;
  cat: string;
  createdAt: string;
};

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product = models?.Product || model("Product", productSchema);
