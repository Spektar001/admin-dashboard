import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import { getUsers } from "@/lib/fetchingUsers";
import { UserType } from "@/models/User";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface UsersPageProps {
  searchParams: {
    q?: string;
    page?: number;
  };
}

interface GetUsers {
  users: UserType[];
  count: number;
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users }: GetUsers = await getUsers(q, page);

  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user..."} />
        <Link
          className="p-2 bg-[#5d57c9] hover:bg-[#433daa] transition-settings text-[--text] rounded-md"
          href="/dashboard/users/new-user"
        >
          Add new user
        </Link>
      </div>
      {!users.length && <div className="text-2xl mt-5">User is not found!</div>}
      {users.length > 0 && (
        <>
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <Image
                        src={user.img || "/noavatar.png"}
                        alt="noavatar"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      {user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.createdAt?.toString().slice(4, 16)}</td>
                  <td>{user.isAdmin ? "Admin" : "Client"}</td>
                  <td>{user.isActive ? "active" : "passive"}</td>
                  <td>
                    <div className="flex gap-3">
                      <Link
                        className="view transition-settings"
                        href={`/dashboard/users/${user.id}`}
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
              ))}
            </tbody>
          </table>
          <Pagination count={count} />
        </>
      )}
    </div>
  );
};

export default UsersPage;
