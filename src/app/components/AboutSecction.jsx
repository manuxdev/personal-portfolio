"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Nodejs</li>
        <li>Nodejs</li>
        <li>Nodejs</li>
        <li>Nodejs</li>
        <li>Nodejs</li>
        <li>Nodejs</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Uci</li>
        <li>Uci</li>
        <li>Uci</li>
        <li>Uci</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>UCI</li>
        <li>UCI</li>
        <li>UCI</li>
        <li>UCI</li>
        <li>UCI</li>
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
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-10 sm:py-16 xl:px-16">
        <Image
          src="/images/portada.webp"
          alt="About Me"
          width={300}
          height={300}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Sint officia magna officia amet velit in sunt irure et do proident.
            Eiusmod excepteur enim aliquip aute officia magna est. Irure
            pariatur excepteur culpa incididunt est sit. Ullamco adipisicing
            Lorem magna reprehenderit excepteur aliquip. Officia laborum minim
            cillum enim labore consectetur.
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
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecction;
