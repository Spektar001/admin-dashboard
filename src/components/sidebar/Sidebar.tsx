import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import { menuItems } from "@/data/dataSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "../LogoutButton";
import { getInfoByUser } from "@/lib/fetchingUsers";
import { UserType } from "@/models/User";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const user: UserType = await getInfoByUser(session?.user?.email!);

  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src={user.img || "/noavatar.png"}
          alt={"avatar"}
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="text-white font-medium">{user.username}</span>
          <span className="text-xs text-[--textSoft]">{user.isAdmin ? 'Administrator' : 'Client'}</span>
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
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
