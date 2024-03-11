import Image from "next/image";

const SingleUserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex gap-10 mt-5">
      <div className="h-max flex-1 bg-[--bgSoft] p-5 rounded-lg">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image src={"/noavatar.png"} alt="avatar" fill />
        </div>
        <p className="mt-3 text-center text-[--textSoft] font-bold">John Doe</p>
      </div>
      <div className="flex-[3] bg-[--bgSoft] p-5 rounded-lg">
        <form action="" className="flex flex-col formSingleUserAndProduct">
          <input type="hidden" name="id" value={""} />
          <label>Username</label>
          <input type="text" name="username" placeholder={""} />
          <label>E-mail</label>
          <input type="email" name="email" placeholder={""} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={""} />
          <label>Address</label>
          <textarea name="address" placeholder={""} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={true}>
              Yes
            </option>
            <option value="false" selected={false}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={true}>
              Yes
            </option>
            <option value="false" selected={false}>
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
