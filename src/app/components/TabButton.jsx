"use client";
import { motion } from "framer-motion";

const variants = {
  default: { scale: 0, opacity: 0 },
  active: { scale: 1, opacity: 1 },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? " text-[#dddcdc] " : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-bold hover:text-[#dddcdc] md:text-base text-sm ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        transition={{ duration: 0.2 }}
        variants={variants}
        className="bg-governor-bay-500 mt-2 mr-3 h-[2px]"
      ></motion.div>
    </button>
  );
};

export default TabButton;
