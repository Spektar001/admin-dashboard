import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-2 mt-7 text-[--textSoft]">
      <Link
        className="hover:underline"
        target="_blank"
        href="https://github.com/Spektar001"
      >
        Harry Gupenec
      </Link>
      <p>2024</p>
      <p>© All rights reserved.</p>
    </div>
  );
};

export default Footer;
