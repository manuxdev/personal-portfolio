"use client";
import Link from "next/link";
import { HandleScroll } from "../utils/handleScroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      onClick={HandleScroll}
      href={href}
      className="
      block sm:text-lg rounder text-[#d3d3d3]
      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-governor-bay-200 hover:via-governor-bay-300 hover:to-governor-bay-400
      transition"
    >
      {title}
    </Link>
  );
};
export default NavLink;
