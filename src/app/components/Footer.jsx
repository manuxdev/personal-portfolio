import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#33353F]  ">
      <div className=" p-6 flex justify-between">
        <Link href="/">
          <span>Manuxdev</span>
        </Link>
        <p className="text-slate-500"></p>
      </div>
    </footer>
  );
};

export default Footer;
