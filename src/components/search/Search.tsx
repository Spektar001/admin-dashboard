"use client";

import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="w-max flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-[--text] outline-none"
      />
    </div>
  );
};

export default Search;
