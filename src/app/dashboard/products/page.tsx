import Pagination from "@/components/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/search/Search";

const ProductsPage = () => {
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a product..."} />
        <Link
          className="p-2 bg-[#5d57c9] hover:bg-[#433daa] transition-settings text-[--text] rounded-md"
          href="/dashboard/products/new-product"
        >
          Add new product
        </Link>
      </div>
      <table className="w-full ">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/noproduct.jpg"
                  alt="noproduct"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Iphone
              </div>
            </td>
            <td>Smartphone</td>
            <td>$803</td>
            <td>08.03.2024</td>
            <td>156</td>
            <td>
              <div className="flex gap-3">
                <Link
                  className="view transition-settings"
                  href={`/dashboard/products/test`}
                >
                  View
                </Link>
                <Link
                  className="delete transition-settings"
                  href={`/dashboard/products/`}
                >
                  Delete
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
