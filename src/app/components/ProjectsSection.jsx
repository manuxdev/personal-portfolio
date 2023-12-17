"use client";
import { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio1 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio2 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio3 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio4 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio5 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio6 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "React Portfolio7 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((t) => (
          <ProjectsCard
            key={t.id}
            title={t.title}
            description={t.description}
            imgUrl={t.image}
            tags={t.tag}
            gitUrl={t.gitUrl}
            previewUrl={t.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
