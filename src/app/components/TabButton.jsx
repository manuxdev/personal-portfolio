import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " text-[#dddcdc] border-b border-governor-bay-400"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold hover:text-[#dddcdc] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
