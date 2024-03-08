"use client";

import { Lists } from "@/data/dataSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: { item: Lists }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      className={`flex items-center gap-3 mt-1 p-5 hover:bg-[#2e374a] transition-settings rounded-xl ${
        isActive ? "bg-[#2e374a]" : ""
      }`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
