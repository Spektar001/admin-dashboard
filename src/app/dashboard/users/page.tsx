import Search from "@/components/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/pagination/Pagination";

const UsersPage = () => {
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user..."} />
        <Link
          className="p-2 bg-[#5d57c9] hover:bg-[#433daa] transition-settings text-[--text] rounded-md"
          href="/dashboard/users/add"
        >
          Add new user
        </Link>
      </div>
      <table className="w-full ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                John doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>08.03.2024</td>
            <td>client</td>
            <td>active</td>
            <td>
              <div className="flex gap-3">
                <Link
                  className="view transition-settings"
                  href={`/dashboard/users/`}
                >
                  View
                </Link>
                <Link
                  className="delete transition-settings"
                  href={`/dashboard/users/`}
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

export default UsersPage;
