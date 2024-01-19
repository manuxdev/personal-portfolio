import Link from "next/link";
import { HandleScroll } from "../utils/handleScroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      onClick={HandleScroll}
      href={href}
      className="
      block py-2 pl-3 pr-4 sm:text-xl rounder text-[#d3d3d3] md:p-0 
      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-governor-bay-200 hover:via-governor-bay-200 hover:to-governor-bay-800 
      transition"
    >
      {title}
    </Link>
  );
};
export default NavLink;
