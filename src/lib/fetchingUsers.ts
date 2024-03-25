import { User } from "@/models/User";
import mongoose from "mongoose";

export const getUserById = async (id: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch User by Id!");
  }
};

export const getInfoByUser = async (email: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};

export const getUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5; // number of users on the page

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    let currentPage = page;
    let users = [];

    while (users.length === 0 && currentPage > 0) {
      const usersToSkip = ITEM_PER_PAGE * (currentPage - 1);

      users = await User.find({ username: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(usersToSkip);

      currentPage--;
    }

    return { count, users, currentPage };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};

export const getUser = async (id: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch single User!");
  }
};
