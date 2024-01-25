"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

import Github from "../../../public/github";
import Email from "../../../public/email";
import Linkedin from "../../../public/linkedin";
import { useState } from "react";
import { HandleScroll } from "../utils/handleScroll";

const botones = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/manuel-pantoja/",
    target: "_blank",
    icon: (
      <Linkedin className="fill-[#bdbcbc] group-hover:fill-white sm:w-7 sm:h-6 w-6 h-4 transition-all" />
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com/manuxdev",
    target: "_blank",
    icon: (
      <Github className="fill-[#bdbcbc] group-hover:fill-white m:w-7 sm:h-6 w-6 h-4 transition-all" />
    ),
  },
  {
    title: "Email",
    target: "",
    href: "/#contacts",
    icon: (
      <Email className="fill-[#bdbcbc] group-hover:fill-white m:w-7 sm:h-6 w-6 h-4 transition-all" />
    ),
  },
];

const HeroSection = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="sm:h-screen xl:pb-0 pb-28 h-auto flex items-center  justify-center mt-[120px] sm:mt-0">
      <div className="flex flex-col-reverse sm:mt-7 mt-0 ">
        <motion.div
          initial={{ scale: 0, y: -150 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className=" flex flex-col items-center justify-center  pt-10"
        >
          <h1
            className=" text-2xl md:text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-governor-bay-200 via-governor-bay-600
             to-governor-bay-900 "
          >
            Hello, I{"'"}m{" "}
            <span className="text-2xl md:text-4xl text-white">
              <TypeAnimation
                sequence={[
                  500,
                  `Software Engineer`,
                  1000,
                  "FrontEnd Developer",
                  1000,
                  "Manuel Pantoja",
                  1000,
                ]}
                wrapper="span"
                speed={50}
              />
            </span>
          </h1>
          <div className="md:w-10/12 ">
            <p className="text-[#ADB7BE]  text-center text-sm  sm mb-4 lg:text-base">
              Student from the University of Computer Sciences with good web
              design skills asd😉
            </p>
          </div>
          <div className="flex gap-5">
            {botones.map((boton) => (
              <Link
                href={boton.href}
                key={boton.title}
                target={boton.target}
                onClick={boton.title === "Email" && HandleScroll}
              >
                <motion.button
                  onMouseEnter={() => setSelectedId(boton.title)}
                  onMouseLeave={() => setSelectedId(null)}
                  className="md:px-4 md:py-2 px-3 py-2 w-full text-sm md:text-sm md:w-fit rounded-full  
               bg-[#2C2C30] group-hover:bg-[#343438] text-[#bdbcbc]  hover:text-white font-extrabold transition-all flex items-center justify-center gap-1 group"
                >
                  <motion.div
                    animate={
                      selectedId === boton.title
                        ? { rotate: [0, -30, 0, 30, 0] }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {boton.icon}
                  </motion.div>
                  {boton.title}
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className=" place-self-center mt-4 lg-mt-0"
        >
          <div
            className="
                    flex justify-center items-center
           "
          >
            <Image
              className=" rounded-full bg-gradient-to-tr from-governor-bay-100
              via-governor-bay-400 to-governor-bay-900 
               w-[280px] h-[280px] shadow-lg shadow-[#2c2c2c] "
              src="/images/foto.png"
              alt="Manuxdev-photo"
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
