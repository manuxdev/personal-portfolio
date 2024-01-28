"use client";
import { useState } from "react";
import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "Explore Cuba in Classic Cars",
    description:
      " Project created for a taxi company in Cuba where I put into practice my skills with Next.js, web design and project planning.",
    image: "/images/explorecubainclassiccars.png",
    type: "web",
    gitUrl: "https://github.com/manuxdev/explorecuba",
    previewUrl: "https://explorecubainclassiccars.com/",

    technologies: ["NextJs", "Taildwind", "CSS", "HTML", "Git", "FramerMotion"],
  },
  {
    id: 2,
    title: "Cuban Trip Experience",
    description:
      " Project created for a taxi company in Cuba where I consolidated knowledge of Wordpress, incorporating reservation forms, which are saved and controlled in Notion.",
    image: "/images/cubantripexperience.png",
    type: "web",
    gitUrl: "",
    previewUrl: "https://cubantripexperience.com/",

    technologies: ["Wordpress", "Notion"],
  },
  {
    id: 3,
    title: "DrinkWata",
    description:
      "Personal project where I learned basic principles of Flutter, teamwork, use of state managers like getX and creating local saves with localPrefernce.",
    image: "/images/drinkwata.png",
    type: "mobile",
    gitUrl: "https://github.com/manuxdev/drinkwata",
    previewUrl: "",

    technologies: ["Flutter", "Git"],
  },
];

const ProjectsSection = () => {
  const cardVariants = {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-20" id="projects">
      <h2
        className="text-2xl md:text-4xl mb-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-tr from-governor-bay-200 via-governor-bay-600
             to-governor-bay-900 text-center "
      >
        My Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projectsData.map((item) => (
          <ProjectsCard
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.image}
            gitUrl={item.gitUrl}
            previewUrl={item.previewUrl}
            technologies={item.technologies}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
