"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
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
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handlerChange = () => {
    const valor = navbarOpen;
    setNavbarOpen(!valor);
  };

  return (
    <nav className="w-full top-0 lef-0 right-0 mt-10">
      <div className="flex container  flex-wrap items-center md:justify-center justify-end mx-auto px-6">
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={handlerChange}
              className="flex items-center p-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={handlerChange}
              className="flex items-center p-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.path} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
