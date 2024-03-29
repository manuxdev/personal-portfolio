"use client";

import { useState } from "react";
import GithubIcon from "../../../public/github.jsx";
import LinkedinIcon from "../../../public/linkedin.jsx";
import Link from "next/link";
import Image from "next/image";
import Github from "../../../public/github.jsx";
import Linkedin from "../../../public/linkedin.jsx";

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
      <div className="md:pr-10">
        <h5 className="text-xl font-bold my-2">Let{"'"}s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-sm md:text-base">
          Do you need more information about my projects or want to collaborate
          on one? Do not doubt to keep in touch with me. I am open to new ideas
          and always willing to learn and grow professionally.
        </p>
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
