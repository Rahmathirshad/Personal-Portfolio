import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          <span className=" font-bold">Hi,</span> My name is <span className=" font-bold">Rahmath irshad.</span>
        </p>
        <p className="text-xl">A self-taught Front-end Developer👨‍💻 based in Hyderabad, India.
          <br></br>
          <br></br>
          I'm highly passionate about designing and developing clean and user-centered interfaces.
          <br></br>
          Constantly learning about and improving on web development skills. Building projects to apply theory of new technologies, best practices, or methods.
          <br></br>
          <br></br>
          Looking forward to learning and collaborating with the best and brightest in this field!
        </p>
        <br></br>
        <div className=" flex gap-32">
          <p>Full Name: M.A Rahmath Irshad
            <br></br>
            <br></br>
            Email: rahmathirshad@gmail.com
          </p>
          <p>
            Degree: Computer Science And Engineering
            <br></br>
            <br></br>
            Address: Hyderabad, Telangana, India-500052
          </p>
          <br></br>
        </div>
        <br></br>
        <Link to="contact" smooth duration={500} className=" bg-cyan-600 w-fit px-10 py-3 rounded-md cursor-pointer">Contact</Link>
      </div>
    </div>
  );
};

export default About;
