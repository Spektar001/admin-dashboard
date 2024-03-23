import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-full flex gap-3 rounded-lg p-5 bg-[--bgSoft] cursor-pointer hover:bg-[#2e374a] transition-settings">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="">Test</span>
        <span className="text-2xl font-medium">123</span>
        <span className="text-sm font-light">
          <span className="text-lime-500">12% </span>
          than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
