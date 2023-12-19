"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

EyeIcon;

const ProjectPage = () => {
  const cardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4 }}
        className="h-52 md:h-[400px] group bg-gray-600"
        style={{
          backgroundImage: `url('/images/portada.webp')`,
          // backgroundColor: "white",
          backgroundSize: "contain",
        }}
      ></motion.div>

      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
        className="z-10  mt-[-100px] rounded-t-[30px] bg-[#181818dc] py-6 px-12 flex flex-col justify-between "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/#projects"
              className="h-10 w-10 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-red-600 group/link transition-all "
            >
              <ChevronLeftIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-red-600"></ChevronLeftIcon>
            </Link>
            <div>
              <h5 className="text-xl font-semibold mb-2">Projecto 1</h5>
              <p className="text-[#ADB7BE]">Aqui va la desc</p>
            </div>
          </div>
          <div className="flex text-end">
            <Link
              href=""
              className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
            >
              <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></CodeBracketIcon>
            </Link>
            <Link
              href=""
              className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></EyeIcon>
            </Link>
          </div>
        </div>
        <div className="h-screen mt-20 px-36">
          Do cupidatat consectetur ex voluptate proident elit non nisi est
          laborum. Deserunt cillum consectetur irure officia. Cillum sint qui ut
          nostrud. Consequat mollit cillum proident non nulla sint aliqua id
          officia voluptate nisi duis. Enim ea consequat ullamco et sunt
          pariatur ipsum est aliqua commodo nisi. Excepteur sit quis et proident
          non consequat tempor aute dolor quis deserunt in ea. Sunt fugiat sunt
          aliqua qui est ullamco esse ut excepteur. Est aute proident sint magna
          amet minim Lorem culpa eiusmod cupidatat. Sunt minim occaecat amet
          aute deserunt voluptate incididunt non deserunt. Aliqua quis veniam
          officia cupidatat ex ad aute enim proident labore et ea commodo enim.
          Ipsum eiusmod proident id anim excepteur in. Occaecat Lorem aute
          pariatur. Aliqua Lorem proident officia anim culpa esse ut elit ipsum
          pariatur dolore minim. Ut incididunt non enim ad adipisicing dolore
          exercitation cillum fugiat eu deserunt. Aliquip nulla voluptate mollit
          mollit. Ipsum est occaecat elit deserunt. Ipsum veniam ex duis esse
          amet sunt. Lorem ut minim laboris anim tempor occaecat non laborum.
          Adipisicing culpa anim tempor ea. Aliquip esse consequat irure irure
          ex commodo minim duis commodo dolor id ut quis id. Commodo id id ex
          ullamco mollit duis id ex laboris enim. Amet minim officia consequat.
          Et occaecat ad Lorem mollit est incididunt minim ipsum elit occaecat
          nulla id non anim ut. Proident et culpa occaecat eiusmod labore. Anim
          ea incididunt laborum do. Commodo voluptate sunt sit aliqua laboris
          cillum culpa est irure velit tempor. Culpa ea irure laborum officia
          non. Veniam sint irure ea reprehenderit enim occaecat reprehenderit
          sit duis exercitation nostrud enim. Deserunt exercitation commodo
          laboris. Excepteur ex do magna qui dolore Lorem nisi id anim.
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
