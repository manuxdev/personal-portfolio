"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-6xl sm:text-7xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-governor-bay-200 via-governor-bay-800 ">
            Hello, I am <br />
            <span className="text-5xl sm:text-7xl text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Software Engineer",
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
          <p className="text-[#ADB7BE] text-base sm:text:lg sm mb-6 lg:text-xl">
            Lorem Ipsum dolor sit cosection adicipliniting elit. Oute
            volutpiroasasd asd,saldlaasimaxcz
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-governor-bay-200 via-governor-bay-600 to-governor-bay-900 hover:bg-gradient-to-br hover:from-governor-bay-200 hover:via-governor-bay-300 hover:to-governor-bay-600 text-white font-extrabold">
              Hire Me
            </button>
            <button className="px-6 py-3 mt-4 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#202020] text-white font-bold border-white hover:border-[#474747] border-2">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg-mt-0">
          <div className="rounded-full bg-[#161616] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="absolute transform -translate-x-1/2 
                translate-y-8 left-1/2"
              src="/images/portada.webp"
              alt="Hero-image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
