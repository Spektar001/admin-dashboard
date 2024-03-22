import { Product } from "@/models/Product";
import mongoose from "mongoose";

export const getProductBuId = async (id: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Product by Id!");
  }
};

export const getProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5; // number of products on the page

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Products!");
  }
};
