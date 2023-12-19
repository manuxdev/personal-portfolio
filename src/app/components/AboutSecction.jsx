"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-sm md:text-base">
        <li>HTML</li>
        <li>CSS</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
        <li>Astro</li>
        <li>Tailwind</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2 text-sm md:text-base">
        <li>Primary Graduate</li>
        <li>High school graduate</li>
        <li>Pre-University Graduate</li>
        <li>In the process of University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2 text-sm md:text-base">
        <li>Creation of website for transportation.</li>
        <li>Web application design.</li>
        <li>Grocer.</li>
        <li>Powder seller.</li>
        <li>Rubber thief.</li>
      </ul>
    ),
  },
];

const AboutSecction = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const hadleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="" id="about">
      <div className="md:grid h-screen md:grid-cols-2 gap-8 py-8 px-4 xl-gap-10 sm:py-16 xl:px-1">
        <Image
          src="/images/fino.jpg"
          alt="About Me"
          width={400}
          height={400}
          className="mt-2"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">About Me</h2>
          <p className="text-sm lg:text-lg">
            Student at the University of Computer Science, passionate about
            learning and applying my knowledge in the real world. I am looking
            for a work environment that allows me to grow professionally and
            contribute to society through technology.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => hadleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => hadleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              Certifications
            </TabButton>{" "}
            <TabButton
              selectTab={() => hadleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="md:mt-8 mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecction;
