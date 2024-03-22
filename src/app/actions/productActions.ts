"use server";

import mongoose from "mongoose";
import { Product } from "@/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async (formData: FormData) => {
  const { title, category, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const newProduct = new Product({
      title,
      category,
      price,
      stock,
      color,
      size,
      desc,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update Product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};
