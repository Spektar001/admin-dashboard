"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-[--bgSoft] p-5 rounded-xl">
      <div className="text-[--textSoft] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-[#2e374a] p-3 rounded-xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none text-[--text]"
          />
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
