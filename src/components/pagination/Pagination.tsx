"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Pagination = ({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5; // number of users or products on the page

  const hasPrev = ITEM_PER_PAGE * (currentPage + 1 - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (currentPage + 1 - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (currentPage + 1 - 1).toString())
      : params.set("page", (currentPage + 1 + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between p-2">
      <button
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
        className="btnPagination transition-settings"
      >
        Previous
      </button>
      <div className="text-center px-3 py-1 bg-[#2E374A] rounded-md">
        Page: {currentPage + 1}
      </div>
      <button
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
        className="btnPagination transition-settings"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
