import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSecction = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold my-2">Let{"'"}s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Aliqua proident aute veniam cillum et fugiat do irure culpa mollit ad
          est ex aliquip proident. Ex irure exercitation culpa ad reprehenderit
          fugiat tempor sint cupidatat irure mollit ex ea voluptate. Nulla minim
          eiusmod occaecat sint sint ipsum officia aliqua occaecat sit excepteur
          do. Ad nisi anim amet sunt excepteur irure commodo commodo nostrud
          quis deserunt. Aliqua eiusmod tempor tempor.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"/"}>
            <Image src={GithubIcon} alt="Github Icon" className="w-12 h-12" />
          </Link>
          <Link href={"/"}>
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="w-12 h-12"
            />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col ">
          <div className="mb-6">
            <label htmlFor="email" className="block text-base mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@exp.ex"
              className="bg-[#18191E] border-b-4 border-governor-bay-900 focus:border-b-4 focus:border-governor-bay-400 placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none transition-all "
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-base mb-2 font-medium">
              Subject
            </label>
            <input
              type=""
              id="subject"
              required
              placeholder="Add a subject"
              className="bg-[#18191E] border-b-4 border-governor-bay-900 focus:border-b-4 focus:border-governor-bay-400 placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none transition-all "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-base mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className=" bg-[#18191E] border-b-4 border-governor-bay-900 focus:border-b-4 focus:border-governor-bay-400 placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none transition-all "
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-governor-bay-900 hover:bg-governor-bay-500 font-medium py-2.5 px-5 rounded-lg w-full transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSecction;
