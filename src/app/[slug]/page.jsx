"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
EyeIcon;

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imgUrl = searchParams.get("imgUrl");
  const description = searchParams.get("description");
  const gitUrl = searchParams.get("gitUrl");
  const previewUrl = searchParams.get("previewUrl");

  // const imgVariants = {
  //   initial: {
  //     y: 100,
  //     height: 400,
  //     width: 370,
  //     borderRadius: "12px 12px 0 0",
  //   },
  //   animate: { y: 0, height: 350, width: "100%", borderRadius: 0 },
  // };
  // const cardVariants = {
  //   initial: {
  //     y: 150,
  //     height: 100,
  //     width: 370,
  //     borderRadius: 12,
  //   },
  //   animate: {
  //     y: 0,
  //     height: "auto",
  //     width: "100%",
  //     borderRadius: "30px 30px 0 0",
  //   },
  // };
  // const textVariant = {
  //   textInitial: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   textAnimate: {
  //     opacity: 1,
  //     scale: 1,
  //   },
  // };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full group bg-gray-600  opacity-90 md:h-screen h-60 md:bg-[center,center] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${imgUrl}')`,
        }}
      ></div>

      <div
        // variants={cardVariants}
        // initial="initial"
        // animate="animate"
        // transition={{ duration: 0.8 }}
        className=" mt-[-80px] md:mt-[-100px] border-t border-t-governor-bay-600 rounded-t-3xl bg-[#181818f8] py-6 md:px-12 px-4 z-10"
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
                {title}
              </h5>
              <p className="text-[#ADB7BE] md:text-base text-xs">
                {description}
              </p>
            </div>
          </div>
          <div className="flex text-end">
            <Link
              href={`${gitUrl}`}
              className="md:h-10 h-8 md:w-10 w-8 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
            >
              <CodeBracketIcon className="md:h-6 md:w-6 h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></CodeBracketIcon>
            </Link>
            <Link
              href={`${previewUrl}`}
              className="md:h-10 h-8 md:w-10 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-governor-bay-500 group/link transition-all"
            >
              <EyeIcon className="md:h-6 md:w-6 h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-governor-bay-500"></EyeIcon>
            </Link>
          </div>
        </div>
        <div className=" py-24 md:px-24 px-5">
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
          Do cupidatat consectetur ex voluptate proident elit non nisi est
          laborum. Deserunt cillum consectetur irure officia. Cillum sint qui ut
          nostrud. Consequat mollit cillum proident non nulla sint aliqua id
          officia voluptate nisi duis. Enim ea consequat ullamco et sunt
          pariatur ipsum est aliqua commodo nisi. Excepteur sit quis et proident
          non consequat tempor aute dolor quis deserunt in ea. Sunt fugiat sunt
          aliqua qui est ullamco esse ut excepteur. Est aute proident sint magna
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
