import { User } from "@/models/User";
import mongoose from "mongoose";

export const getUserBuId = async(id: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user by id!");
  }
}