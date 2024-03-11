import Image from "next/image";

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex gap-10 mt-5">
      <div className="h-max flex-1 bg-[--bgSoft] p-5 rounded-lg">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image src={"/noavatar.png"} alt="avatar" fill />
        </div>
        <p className="mt-3 text-center text-[--textSoft] font-bold">Iphone</p>
      </div>
      <div className="flex-[3] bg-[--bgSoft] p-5 rounded-lg">
        <form action="" className="flex flex-col formSingleUserAndProduct">
          <input type="hidden" name="id" value={""} />
          <label>Title</label>
          <input type="text" name="title" placeholder={""} />
          <label>Price</label>
          <input type="number" name="price" placeholder={""} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={""} />
          <label>Color</label>
          <input type="text" name="color" placeholder={""} />
          <label>Size</label>
          <input type="text" name="size" placeholder={""} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={9} placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
