import { updateProduct } from "@/app/actions/productActions";
import { getProductBuId } from "@/lib/fetchingProducts";
import { ProductType } from "@/models/Product";
import Image from "next/image";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product: ProductType = await getProductBuId(params.id);

  return (
    <div className="flex gap-10 mt-5">
      <div className="h-max flex-1 bg-[--bgSoft] p-5 rounded-lg">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image src={product.img || "/noproduct.jpg"} alt="avatar" fill />
        </div>
        <p className="mt-3 text-center text-[--textSoft] font-bold">
          {product.title}
        </p>
      </div>
      <div className="flex-[3] bg-[--bgSoft] p-5 rounded-lg">
        <form
          action={updateProduct}
          className="flex flex-col formSingleUserAndProduct"
        >
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price.toString()}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock.toString()}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size || "size"} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={9} placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
