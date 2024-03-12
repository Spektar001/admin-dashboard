import { User } from "@/models/User";
import mongoose from "mongoose";

export const getUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
