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
      hover:text-governor-bay-300
      transition"
    >
      {title}
    </Link>
  );
};
export default NavLink;
