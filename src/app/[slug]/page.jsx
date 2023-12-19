"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
// import { useRouter } from "next/navigation";

EyeIcon;

const ProjectPage = () => {
  // const router = useRouter();
  // const { valor } = router.query;
  const cardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="">
      {/* <div>{valor}</div> */}
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
        className=" mt-[-80px] md:mt-[-100px] rounded-t-[30px] bg-[#181818dc] py-6 md:px-12 px-4 flex flex-col justify-between "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/#projects"
              className="md:h-10 h-8 md:w-10 w-8 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-red-600 group/link transition-all "
            >
              <ChevronLeftIcon className="md:h-6 md:w-6 h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-red-600"></ChevronLeftIcon>
            </Link>
            <div>
              <h5 className="md:text-xl text-base font-semibold mb-2">
                Projecto 1
              </h5>
              <p className="text-[#ADB7BE] md:text-base text-xs">
                Aqui va la desc
              </p>
            </div>
          </div>
          <div className="flex text-end">
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
        <div className="h-screen mt-20 md:px-36 px-5">
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
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
