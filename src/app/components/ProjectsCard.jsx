import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  slug,
}) => {
  return (
    <div className="cursor-pointer hover:scale-110 transition-all">
      <Link
        href={{
          pathname: "/[slug]",
          query: {
            valor: "Esto es un valor",
          },
        }}
        as={`${slug}`}
      >
        <div
          className="h-52 md:h-72 rounded-t-xl relative group bg-zinc-500 "
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
          }}
        ></div>
      </Link>

      <div className="rounded-b-xl mt-1 bg-[#181818] md:py-6 py-3 px-4 flex flex-row justify-between items-center">
        <div>
          <h5 className="md:text-xl text-base font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE] md:text-base text-sm">{description}</p>
        </div>
        <div className="flex items-center  justify-between ">
          <Link
            href=""
            className="md:h-10 h-8 md:w-10 w-8 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
          >
            <CodeBracketIcon className="md:h-6 md:w-6 h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></CodeBracketIcon>
          </Link>
          <Link
            href=""
            className="md:h-10 h-8 md:w-10 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
          >
            <EyeIcon className="md:h-6 md:w-6 h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></EyeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
