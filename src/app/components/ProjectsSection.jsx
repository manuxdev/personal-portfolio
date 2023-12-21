"use client";
import { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio1 Website",
    description: "Project 1 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio1_Website",
  },
  {
    id: 2,
    title: "React Portfolio2 Website",
    description: "Project 2 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
    slug: "React_Portfolio2_Website",
  },
  {
    id: 3,
    title: "React Portfolio3 Website",
    description: "Project 3 description",
    image: "/images/portada.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio3_Website",
  },
  {
    id: 4,
    title: "React Portfolio4 Website",
    description: "Project 4 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio4_Website",
  },
  {
    id: 5,
    title: "React Portfolio5 Website",
    description: "Project 5 description",
    image: "/images/portada.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio5_Website",
  },
  {
    id: 6,
    title: "React Portfolio6 Website",
    description: "Project 6 description",
    image: "/images/portada.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio6_Website",
  },
  {
    id: 7,
    title: "React Portfolio7 Website",
    description: "Project 7 description",
    image: "/images/portada.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "React_Portfolio7_Website",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-52 md:mt-[-80px]" id="projects">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((t, index) => (
          <AnimatePresence key={index}>
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              exit={{ width: 500 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <ProjectsCard
                key={t.id}
                title={t.title}
                description={t.description}
                imgUrl={t.image}
                tags={t.tag}
                gitUrl={t.gitUrl}
                previewUrl={t.previewUrl}
                slug={t.slug}
              />
            </motion.li>
          </AnimatePresence>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
