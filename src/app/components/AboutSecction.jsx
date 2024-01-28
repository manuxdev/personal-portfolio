"use client";

import React, { useRef, useState } from "react";
import TabButton from "./TabButton";
import { datos } from "@/data/datos";
import Link from "next/link";
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
  const lineVariant = {
    initialLine: { height: 100 },
    animateLine: { height: "auto" },
  };

  const datosfiltrados = datos.filter((item) => item.id === tab);

  return (
    <section className="" id="about">
      <div className=" gap-8   xl-gap-10  px-3">
        <div className=" text-left flex flex-col h-full ">
          <h2
            className="text-2xl md:text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-governor-bay-200 via-governor-bay-600
             to-governor-bay-900 "
          >
            About Me
          </h2>
          <p className="text-[#ADB7BE]   text-sm  sm mb-4 lg:text-base">
            Student at the University of Computer Science, passionate about
            learning and applying my knowledge in the real world. I am looking
            for a work environment that allows me to grow professionally and
            contribute to society through technology.
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
            <ol
              ref={ref}
              className="relative border-s border-gray-700 dark:border-gray-700"
            >
              <AnimatePresence>
                {datosfiltrados.map((el) =>
                  el.elementos.map((subEl, index) => (
                    <motion.li
                      className="mb-10 ms-4"
                      key={Object.values(subEl)[0].id}
                      variants={variants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.1 },
                      }}
                      transition={{ duration: 0.5, delay: index * 0.5 }}
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
                      <Link href={Object.values(subEl)[0].href} target="_blank">
                        <motion.button
                          className="md:px-4 md:py-2 px-3 py-2 text-sm md:text-sm w-fit rounded-full  
            bg-[#2C2C30] hover:bg-[#3f3f42] text-[#bdbcbc] hover:text-governor-bay-300 font-extrabold transition-all flex items-center justify-center gap-1 group"
                        >
                          <div>See More ➡</div>
                        </motion.button>
                      </Link>
                    </motion.li>
                  ))
                )}
              </AnimatePresence>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecction;
