import { updateUser } from "@/app/actions/userActions";
import { getUserById } from "@/lib/fetchingUsers";
import { UserType } from "@/models/User";
import Image from "next/image";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const user: UserType = await getUserById(params.id);

  return (
    <div className="flex gap-10 mt-5">
      <div className="h-max flex-1 bg-[--bgSoft] p-5 rounded-lg">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image src={user.img || "/noavatar.png"} alt="avatar" fill />
        </div>
        <p className="mt-3 text-center text-[--textSoft] font-bold">
          {user.username}
        </p>
      </div>
      <div className="flex-[3] bg-[--bgSoft] p-5 rounded-lg">
        <form
          action={updateUser}
          className="flex flex-col formSingleUserAndProduct"
        >
          <input type="hidden" name="id" value={params.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>E-mail</label>
          <input disabled type="email" name="email" value={user.email} />
          <label>Password</label>
          <input
            type="password"
            minLength={5}
            name="password"
            placeholder={user.password}
          />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={!!user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={!!user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
