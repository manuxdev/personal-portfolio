"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { HandleScroll } from "../utils/handleScroll";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className=" text-5xl sm:text-7xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-governor-bay-200 via-governor-bay-800 ">
            Hello, I am <br />
            <span className="text-2xl sm:text-7xl text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  `Software Engineer`,
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
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
          <div className="sm:w-10/12 ">
            <p className="text-[#ADB7BE]  sm:text-left text-sm sm:text:lg sm mb-6 lg:text-xl">
              Student from the University of Computer Sciences with good web
              design skills 😉
            </p>
          </div>
          <div>
            <Link href="/#contacts" onClick={HandleScroll}>
              <button
                className="sm:px-6 sm:py-3 px-4 py-2 w-full text-sm sm:text-base sm:w-fit rounded-full mr-4 
            bg-gradient-to-br from-governor-bay-200 via-governor-bay-600
             to-governor-bay-900 hover:bg-gradient-to-br hover:from-governor-bay-200
              hover:via-governor-bay-500 hover:to-governor-bay-700 hover:text-black font-extrabold transition-all"
              >
                Hire Me
              </button>
            </Link>
            <a href="/images/fino.jpg" download="Curriculum">
              <button
                className="sm:px-6 sm:py-3 px-4 py-2 mt-4 w-full text-sm sm:text-base sm:w-fit rounded-full bg-transparent
             hover:bg-[#202020] text-white font-bold border-white hover:border-[#474747] border-2 transition-all"
              >
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-4 place-self-center mt-4 lg-mt-0"
        >
          <div
            className="rounded-full bg-gradient-to-tr from-governor-bay-100
           via-governor-bay-400 to-governor-bay-900 bg-[#161616] w-[250px] 
           h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-lg shadow-[#2c2c2c] "
          >
            <Image
              className="absolute transform -translate-x-1/2 
                lg:-translate-y-8 -translate-y-5 left-1/2 rounded-full"
              src="/images/foto.png"
              alt="Hero-image"
              width={600}
              height={600}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
