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

      <div className="rounded-b-xl mt-2 bg-[#181818] py-6 px-4 flex flex-row justify-between items-center">
        <div>
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
        <div className="flex items-center  justify-between ">
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></CodeBracketIcon>
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></EyeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
