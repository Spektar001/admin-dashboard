"use server";

import { getHashedPassword } from "@/lib/getHashedPassword";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface UpdateFields {
  [key: string]: string | FormDataEntryValue | undefined;
}

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const hashedPassword = await getHashedPassword(String(password));

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

    const hashedPassword = await getHashedPassword(String(password));

    const updateFields: UpdateFields = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    };

    for (const key in updateFields) {
      if (updateFields[key] === "" || undefined) {
        delete updateFields[key];
      }
    }

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
