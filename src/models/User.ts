import { model, models, Schema } from "mongoose";

export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: string;
  isActive: string;
  phone: string;
  address: string;
  createdAt: string;
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", userSchema);
