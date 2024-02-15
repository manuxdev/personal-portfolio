import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contacts",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full top-0 lef-0 right-0 mt-8 z-50 absolute">
      <div className="flex  items-center justify-center  mx-auto px-6 space-x-5">
        <div className="mobile-menu block md:hidden"></div>
       
          <Image
            className=" rounded-full bg-gradient-to-tr from-governor-bay-100
              via-governor-bay-400 to-governor-bay-900 
                shadow-lg shadow-[#2c2c2c] "
            src="/images/foto.png"
            alt="Manuxdev-photo"
            width={50}
            height={50}
          />
        

        <div className="menu  md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row  gap-5 mt-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.path} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
