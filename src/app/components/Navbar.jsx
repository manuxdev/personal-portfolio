import NavLink from "./NavLink";

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
      <div className="flex  items-center justify-center  mx-auto px-6">
        <div className="mobile-menu block md:hidden"></div>
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
