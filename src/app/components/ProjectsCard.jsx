import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const techIcons = {
  React: "/icons/astro.svg",
  JavaScript: "/icons/astro.svg",
  CSS: "/icons/astro.svg",
  HTML: "/icons/astro.svg",
  React_Native: "/icons/astro.svg",
  // Agrega aquí cualquier otra tecnología que necesites
};

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  slug,
  technologies,
}) => {
  const [isHover, setIsHover] = useState(false);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="cursor-pointer transition-all">
      <div
        className="h-48 md:h-64 rounded-t-xl relative group bg-zinc-500 "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="absolute  bg-[#7e7e7e5e] rounded-t-xl w-full h-full top-0 left-0 "
        >
          <ul className="bottom-0 absolute flex-row flex items-center justify-center">
            {technologies.map((tech, index) => (
              <AnimatePresence key={index}>
                <motion.li
                  variants={cardVariants}
                  initial="initial"
                  animate={isHover ? "animate" : "initial"}
                  whileTap={isHover ? "animate" : "initial"}
                  exit={{ width: 500 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="text-xl px-2"
                >
                  <Image
                    alt={`${tech}`}
                    src={techIcons[tech]}
                    width={50}
                    height={50}
                  />
                </motion.li>
              </AnimatePresence>
            ))}
          </ul>
        </motion.div>
        <Link
          href={{
            pathname: `/${slug}`,
            query: {
              title: title,
              imgUrl: imgUrl,
              description: description,
              gitUrl: gitUrl,
              previewUrl: previewUrl,
            },
          }}
          target="_blank"
          className="absolute right-0"
        >
          <Image
            alt="salir"
            src="/icons/salir.svg"
            width={30}
            height={30}
            className="right-0 mr-4 mt-5 fill-red-600"
          />
        </Link>
      </div>

      <div className="rounded-b-xl mt-1 bg-[#181818] md:py-2 py-2 px-4 flex flex-row justify-center items-center">
        <div>
          <h5 className="md:text-xl text-base font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE] md:text-base text-sm text-center">
            {description}
          </p>
        </div>
        <div className="flex items-center  justify-between ">
          {/* <Link
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
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
