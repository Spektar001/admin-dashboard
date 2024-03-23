import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <Link
          className="w-[150px] text-center text-lg font-medium p-7 bg-teal-500 hover:bg-[#00726e] text-[--text] rounded-md transition-settings"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="w-[150px] text-center text-lg font-medium p-7 bg-teal-500 hover:bg-[#00726e] text-[--text] rounded-md transition-settings"
          href={"/registration"}
        >
          Registration
        </Link>
      </div>
    </div>
  );
}
