import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5 lg:mt-20">
          <span className=" font-bold">Hi,</span> My name is <span className=" font-bold">Rahmath irshad.</span>
        </p>
        <p className="text-x lg:text-xl">A self-taught Front-end Web Developer👨‍💻 based in Hyderabad, India.
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
        <div className="lg:flex gap-32">
          <p>Full Name: M.A Rahmath Irshad
            <br></br>
            <br></br>
            DOB: 07-September-1999
            <br></br>
            <br></br>
            Degree: Computer Science And Engineering
          </p>
          <br></br>
          <p>
            Address: Hyderabad, Telangana, India.
            <br></br>
            <br></br>
            Email: rahmathirshad@gmail.com
            <br></br>
            <br></br>
            Phone\whatsapp: +91 7097008647
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
