import React from "react";
const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-governor-bay-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-[#a7a7a7]";
  return (
    <button
      className={`${buttonStyle} rounded-full  px-6  py-3 md:text-xl text-base cursor-pointer transition-all duration-300 border-2 `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
