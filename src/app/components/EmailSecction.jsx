"use client";

import { useState } from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSecction = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };
    //   console.log(options.body);
    const response = await fetch(endpoint, options);
    // const resData = await response.json();
    // console.log(resData);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4"
      id="contacts"
    >
      <div>
        <h5 className="text-xl font-bold my-2">Let{"'"}s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-sm md:text-base">
          Aliqua proident aute veniam cillum et fugiat do irure culpa mollit ad
          est ex aliquip proident. Ex irure exercitation culpa ad reprehenderit
          fugiat tempor sint cupidatat irure mollit ex ea voluptate. Nulla minim
          eiusmod occaecat sint sint ipsum officia aliqua occaecat sit excepteur
          do. Ad nisi anim amet sunt excepteur irure commodo commodo nostrud
          quis deserunt. Aliqua eiusmod tempor tempor.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"/"}>
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="md:w-12 md:h-12 w-10 h-10"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="md:w-12 md:h-12 w-10 h-10"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-base mb-2 font-medium">
              Your Email
            </label>
            <input
              name="email"
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
              name="subject"
              type="text"
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
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent succefully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSecction;
