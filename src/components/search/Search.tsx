"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", '1');

      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }

      replace(`${pathname}?${params}`);
    },
    300
  );

  return (
    <div className="w-max flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-[--text] outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
