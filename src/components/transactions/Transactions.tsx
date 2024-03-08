import Image from "next/image";

const Transactions = () => {
  return (
    <div className="w-full rounded-lg p-5 bg-[--bgSoft]">
      <h2 className="font-light text-lg text-[--textSoft] mb-5">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
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
                John Doe
              </div>
            </td>
            <td>
              <span className="pending p-1 rounded-md text-sm text-white">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
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
                John Doe
              </div>
            </td>
            <td>
              <span className="done p-1 rounded-md text-sm text-white">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
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
                John Doe
              </div>
            </td>
            <td>
              <span className="cancelled p-1 rounded-md text-sm text-white">
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
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
                John Doe
              </div>
            </td>
            <td>
              <span className="pending p-1 rounded-md text-sm text-white">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
