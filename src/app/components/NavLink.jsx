import Link from "next/link";
import { HandleScroll } from "../utils/handleScroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      onClick={HandleScroll}
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounder md:p-0 hover:text-white focus:text-white"
    >
      {title}
    </Link>
  );
};
export default NavLink;
