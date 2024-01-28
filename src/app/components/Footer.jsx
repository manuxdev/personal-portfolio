import Link from "next/link";
import React from "react";
import Github from "../../../public/github";
import Linkedin from "../../../public/linkedin";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#1d1e24]  ">
      <div className=" p-6 flex justify-around">
        <Link href="/">
          <span>Manuxdev</span>
        </Link>
        <div className=" flex flex-row items-center justify-start gap-2">
          <Link
            className=" w-8 h-8 group"
            href="https://github.com/manuxdev"
            target="_blank"
          >
            <Github className="fill-[#bdbcbc] group-hover:fill-governor-bay-300 w-8 h-8 transition-all" />
          </Link>
          <Link
            className=" w-10 h-10 "
            href="https://www.linkedin.com/in/manuel-pantoja/"
            target="_blank"
          >
            <Linkedin className="fill-[#bdbcbc] hover:fill-governor-bay-300 w-10 h-10 transition hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
