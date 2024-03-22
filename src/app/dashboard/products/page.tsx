import Pagination from "@/components/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/search/Search";
import { ProductType } from "@/models/Product";
import { getProducts } from "@/lib/fetchingProducts";
import { deleteProduct } from "@/app/actions/productActions";

interface ProductsPageProps {
  searchParams: {
    q?: string;
    page?: number;
  };
}

interface GetProducts {
  products: ProductType[];
  count: number;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products }: GetProducts = await getProducts(q, page);

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
      {!products.length && <div className="text-2xl mt-5">Nothing found!</div>}
      {products.length > 0 && (
        <>
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <Image
                        src={product.img || "/noproduct.jpg"}
                        alt="noproduct"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      {product.title}
                    </div>
                  </td>
                  <td>{product.desc}</td>
                  <td>${product.price}</td>
                  <td>{product.createdAt?.toString().slice(4, 16)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="flex gap-3">
                      <Link
                        className="view transition-settings"
                        href={`/dashboard/products/${product.id}`}
                      >
                        View
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
                        <button className="delete transition-settings">
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination count={count} />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
