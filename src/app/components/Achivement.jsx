"use client";

import { motion } from "framer-motion";

const achivementsList = [
  {
    metric: "Project",
    value: "100+",
  },
  {
    metric: "Users",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "100+",
  },
];

const Achivement = () => {
  return (
    <div className="py-8  xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-2xl py-5 md:px-4 flex flex-row items-center justify-between">
        {achivementsList.map((achivement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:mx-4 mx-2 relative"
            >
              <motion.div
                transition={{ duration: 0.2 }}
                whileHover={{ backgroundColor: "#1b1b5c36" }}
                className=" rounded-full py-12 px-12 absolute cursor cursor-pointer "
              ></motion.div>
              <h2 className="text-xl  md:text-4xl  font-bold">
                {achivement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achivement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achivement;
