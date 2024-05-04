import React from "react";
//import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import webdev from "../assets/webdev.png"
import SocMediaLinks2 from "./SocMediaLinks2";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-400 text-2xl py-4 max-w-md">Hi, I'm</p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            RAHMATH
          </h2>
          <h2 className="text-4xl sm:text-7xl  text-white">
            IRSHAD
          </h2>
          <p className="text-gray-400 font-semibold text-lg py-4 max-w-md md:text-2xl">FRONT-END DEVELOPER 👨‍💻</p>
          <p className="text-gray-400 text-sm max-w-md md:text-2xl">I Build Web & Hybrid Mobile Apps using <span className="font-semibold">React.js & React Native</span></p>
          <div className="flex lg:py-4">
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit font-bold px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="py-4 px-8">
              <SocMediaLinks2 />
            </div>

          </div>
        </div>

        <div>
          <img
            src={webdev}
            alt="my profile"
            className="h-72 md:h-96 pb-3 sm:pb-0"
          />
        </div>
      </div>

    </div>

  );
};

export default Home;