import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import { menuItems } from "@/data/dataSidebar";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src={"/noavatar.png"}
          alt={"avatar"}
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-[--textSoft]">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-[--textSoft] font-bold text-sm mt-2">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-full flex items-center gap-2 p-5 mt-1 text-white rounded-xl hover:bg-[#2e374a] transition-settings"
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
