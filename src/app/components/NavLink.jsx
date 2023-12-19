import Link from "next/link";

export const handleScroll = (e) => {
  // Primero, previene el comportamiento predeterminado
  e.preventDefault();
  // Obtiene el href y elimina todo antes del hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // Obtiene el elemento por id y usa scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

const NavLink = ({ href, title }) => {
  return (
    <Link
      onClick={handleScroll}
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounder md:p-0 hover:text-white focus:text-white"
    >
      {title}
    </Link>
  );
};
export default NavLink;
