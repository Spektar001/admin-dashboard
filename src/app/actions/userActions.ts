"use server";

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "@/models/User";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(password), salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return false;
    } else {
      await newUser.save();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new User!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update User!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};