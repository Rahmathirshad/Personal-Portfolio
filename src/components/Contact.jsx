import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full lg:pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 font-semibold">To collaborate, get in touch with me</p>
        </div>

        <div className=" md:flex md:justify-between">
          <div className=" flex flex-col justify-evenly pb-4 sm:ite">
            <div className="flex items-center  pb-6 md:pb-0">
              <FaPhoneAlt size={40} className="mr-8 text-sky-400" />
              <div>
                <h1 className="text-2xl">Phone</h1>
                <a href="tel:+917097008647" className="text-xl font-medium">+91 7097008647</a>
              </div>
            </div>
            <div className="flex items-center pb-6 md:pb-0">
              <FaPhoneAlt size={40} className="mr-8 text-sky-400" />
              <div>
                <h1 className="text-2xl ">E-Mail</h1>
                <a href="mailto:rahmathirshad@gmail.com" className="text-xl font-medium">rahmathirshad@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center  pb-6 md:pb-0">
              <FaPhoneAlt size={40} className="mr-8 text-sky-400" />
              <div>
                <h1 className="text-2xl">Location</h1>
                <p className="text-xl font-medium">Hyderabad-India</p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/e0c17fd9-a3da-4829-abab-95361b1f4ee3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
