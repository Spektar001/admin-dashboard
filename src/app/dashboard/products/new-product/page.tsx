"use client";
import { addProduct } from "@/app/actions/productActions";

const AddProductPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const categorySelect = document.getElementById(
      "category"
    ) as HTMLSelectElement;
    formData.set("category", categorySelect!.value);

    addProduct(formData);
  };

  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between form"
      >
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" required />
        <input type="number" placeholder="Stock" name="stock" required />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows={9}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
