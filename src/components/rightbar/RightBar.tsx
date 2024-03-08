import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="fixed pr-5">
      <div className="relative mb-5 p-5 bg-gradient-to-t from-[#182237] to-[#253352] rounded-lg">
        <div className="absolute bottom-0 right-0 w-2/4 h-2/4">
          <Image
            className="object-contain opacity-20"
            src="/astronaut.png"
            alt="astronaut"
            fill
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-medium">🔥 Available Now</span>
          <h3 className="text-md text-white font-bold">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[--textSoft] text-xs font-medium">
            Takes 4 minutes to learn
          </span>
          <p className="text-[--textSoft] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="w-max flex items-center gap-2 p-2 bg-[#5d57c9] hover:bg-[#433daa] transition-settings rounded-md">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="mb-5 p-5 bg-gradient-to-t from-[#182237] to-[#253352] rounded-lg">
        <div className="flex flex-col gap-3">
          <span className="font-medium">🚀 Coming Soon</span>
          <h3 className="text-md text-white font-bold">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-[--textSoft] text-xs font-medium">
            Boost your productivity
          </span>
          <p className="text-[--textSoft] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="w-max flex items-center gap-2 p-2 bg-[#5d57c9] hover:bg-[#433daa] transition-settings rounded-md">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
