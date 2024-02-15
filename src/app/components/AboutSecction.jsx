"use client";

import React, { useRef, useState } from "react";
import TabButton from "./TabButton";
import { datos } from "@/data/datos";

import { AnimatePresence, motion, useInView } from "framer-motion";
const AboutSecction = () => {
  const [tab, setTab] = useState("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hadleTabChange = (id) => {
    setTab(id);
  };
  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const datosfiltrados = datos.filter((item) => item.id === tab);

  return (
    <section className="" id="about">
      <div className=" gap-8   xl-gap-10  px-3">
        <div className=" text-left flex flex-col ">
          <h2
            className="text-2xl md:text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-governor-bay-200 via-governor-bay-600
             to-governor-bay-900 "
          >
            About Me
          </h2>
          <p className="text-[#ADB7BE]   text-sm  sm mb-4 lg:text-base">
            I am a passionate web developer about to graduate from the
            University of Computer Science, with a solid foundation in HTML, CSS
            and JavaScript. Although my career path is relatively new, I have
            gained valuable skills in modern frameworks like NextJS. I am
            excited to apply my knowledge to create innovative solutions and
            contribute to the world of web development.
          </p>

          <div className="flex flex-row justify-center mt-8 ">
            <TabButton
              selectTab={() => hadleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => hadleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="md:mt-8 mt-4 ">
            <AnimatePresence>
              <ol
                ref={ref}
                className="relative  border-s border-gray-700 dark:border-gray-700"
              >
                {datosfiltrados.map((el) =>
                  el.elementos.map((subEl, index) => (
                    <motion.li
                      className="mb-10 ms-4"
                      key={Object.values(subEl)[0].h3}
                      variants={variants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.1 },
                      }}
                      transition={{ duration: 0.5, delay: index * 0.6 }}
                    >
                      <motion.div className="absolute w-3 h-3 bg-governor-bay-400 rounded-full mt-1.5 -start-1.5 border border-governor-bay-400"></motion.div>

                      <time className="mb-1 text-sm font-normal leading-none text-governor-bay-200 ">
                        {Object.values(subEl)[0].time}
                      </time>
                      <h3 className="text-lg font-semibold text-white ">
                        {Object.values(subEl)[0].h3}
                      </h3>
                      <p className="mb-4 text-base font-normal text-[#ADB7BE]">
                        {Object.values(subEl)[0].p}
                      </p>
                    </motion.li>
                  ))
                )}
              </ol>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecction;
