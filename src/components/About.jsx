import React from "react";
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaReact, FaSass, } from "react-icons/fa";
import { SiExpo, SiRedux, SiTailwindcss, SiNextdotjs, SiAndroidstudio, SiPostman, SiAdobephotoshop } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Link } from "react-scroll";

const About = () => {
  const programming = [
    { name: "Javascript", icon: FaGithub },
    { name: "SASS", icon: FaSass },
    { name: "CSS", icon: FaCss3 },
    { name: "HTML", icon: FaHtml5 },
  ];
  const frmwrkAndLib = [
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "Redux Thunk", icon: SiRedux },
    { name: "Expo CLI", icon: SiExpo },
    { name: "Material UI", icon: SiExpo },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "RN Elements", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
  ];
  const tools = [
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscCode },
    { name: "Android Stud", icon: SiAndroidstudio },
    { name: "Postman", icon: SiPostman },
    { name: "Figma", icon: FaFigma },
    { name: "Photoshop", icon: SiAdobephotoshop },
  ];
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen lg:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          <span className=" font-bold">Hi,</span> My name is <span className=" font-bold">Rahmath irshad.</span>
        </p>
        <p>A Front-End Developer who loves turning imagination into reality.
          <br/>
          My enthusiasm lies in building innovative solutions on the internet, backed by strong organizational and communication skills, and a keen eye for writing efficient code.
          <br/>
          Proficient in JavaScript, React.js, React Native and Redux, enabling me to build robust and scalable applications.
          Strong commitment to delivering high-quality, seamless user experiences.</p>
        {/* <p> a Front-End Developer who loves turning imagination into reality. I bridge the gap between visionary ideas and impactful software. As a passionate Front-End Developer</p> */}
        <section className="pt-5">
          <p className="font-bold inline border-b-2 border-gray-500 text-xl">Tech Stack</p>
          <div>
            <p className="font-semibold pt-3 pb-1">Languages</p>
            <div className="grid text-center sm:grid-cols-2 md:grid-cols-6">
              {programming.map((item) => <div className="bg-orange-400 flex justify-center items-center py-2 px-4 mr-2 mb-2 rounded-lg cursor-pointer text-slate-300 hover:scale-110 hover:text-sky-400 duration-200">
                <item.icon size={20} className="mr-2" />{item.name}
              </div>)}
            </div>
          </div>
          <div>
            <p className="font-semibold pt-3 pb-1">Frameworks & Libraries</p>
            <div className="grid text-center sm:grid-cols-2 md:grid-cols-6">
              {frmwrkAndLib.map((item) => <div className="bg-orange-400 flex justify-center items-center py-2 px-4 mr-2 mb-2 rounded-lg cursor-pointer text-slate-300 hover:scale-110 hover:text-sky-400 duration-200">
                <item.icon size={20} className="mr-2" />{item.name}
              </div>)}
            </div>
          </div>
          <div>
            <p className="font-semibold pt-3 pb-1">Tools</p>
            <div className="grid text-center sm:grid-cols-2 md:grid-cols-6">
              {tools.map((item) => <div className="bg-orange-400 flex justify-center items-center py-2 px-4 mr-2 mb-2 rounded-lg cursor-pointer text-slate-300 hover:scale-110 hover:text-sky-400 duration-200">
                <item.icon size={20} className="mr-2" />{item.name}
              </div>)}
            </div>
          </div>
        </section>
        {/* <p className="text-x lg:text-xl">A Experienced Front-end Developer👨‍💻 based in Hyderabad, India.
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
        </div> */}
      </div>
    </div>
  );
};

export default About;
