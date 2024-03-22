import { addUser } from "@/app/actions/userActions";

const AddUserPage = () => {
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <form action={addUser} className="flex flex-wrap justify-between form">
        <input
          minLength={3}
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <input type="email" placeholder="E-mail" name="email" required />
        <input
          minLength={5}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={9}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
