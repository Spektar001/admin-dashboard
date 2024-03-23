"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <button
    type="button"
    onClick={() => signOut({ callbackUrl: "/" })}
    className="w-full flex items-center gap-2 p-5 mt-1 text-white rounded-xl hover:bg-[#2e374a] transition-settings"
  >
    <MdLogout />
    Logout
  </button>
  );
};

export default LogoutButton;