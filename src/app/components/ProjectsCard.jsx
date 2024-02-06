"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Code from "../../../public/icons/code";
import Exit from "../../../public/icons/salir";

const techIcons = {
  React: "/icons/react.svg",
  Taildwind: "/icons/tailwind.svg",
  CSS: "/icons/css.svg",
  HTML: "/icons/html.svg",
  Flutter: "/icons/flutter-.svg",
  Git: "/icons/git.svg",
  NextJs: "/icons/nextjs.svg",
  FramerMotion: "/icons/framer_motion.svg",
  Wordpress: "/icons/wordpress.svg",
  Notion: "/icons/notion.svg",
  // Agrega aquí cualquier otra tecnología que necesites
};

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  type,
  technologies,
}) => {
  const showGit = gitUrl === "";
  const showUrl = previewUrl === "";

  return (
    <div className="flex md:flex-row flex-col bg-zinc-900 rounded-2xl">
      {type === "web" ? (
        <Image
          className=" rounded-xl md:w-[45%] w-full"
          src={imgUrl}
          alt={title}
          width={300}
          height={200}
        />
      ) : (
        <div className=" flex justify-center bg-governor-bay-950 rounded-2xl md:w-[45%] w-full ">
          <Image
            className="   rounded-xl "
            src={imgUrl}
            alt={title}
            width={112}
            height={200}
          />
        </div>
      )}

      <div className="h-auto  py-5 px-4  md:w-[55%] w-full">
        <h2 className="text-2xl font-medium text-governor-bay-300">{title}</h2>
        <p className="text-[#ADB7BE] text-sm mt-2 ">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <ul className=" flex-row flex gap-2">
            {technologies.map((tech, index) => (
              <motion.li key={index} className="text-xl ">
                <Image
                  alt={`${tech}`}
                  src={techIcons[tech]}
                  width={20}
                  height={20}
                />
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-2 ">
            {showGit ? null : (
              <Link className="  w-8 h-8 " href={gitUrl} target="_blank">
                <Code className="stroke-[#bdbcbc] hover:stroke-governor-bay-300 w-8 h-8 transition hover:scale-110" />
              </Link>
            )}
            {showUrl ? null : (
              <Link className=" w-7 h-7 " href={previewUrl} target="_blank">
                <Exit className="fill-[#bdbcbc] hover:fill-governor-bay-300 w-7 h-7 transition hover:scale-110" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
