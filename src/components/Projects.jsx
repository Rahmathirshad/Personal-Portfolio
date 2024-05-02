import React from "react";
import personalportfolio from "../assets/portfolio/personal portfolio.jpg";
import ecom from "../assets/portfolio/e-com.jpg";
import facereco from "../assets/portfolio/face-reco.jpg";
import robofriends from "../assets/portfolio/robo-friends.jpg";
import todos from "../assets/portfolio/todos.jpg";
import filed from "../assets/portfolio/filed.jpg";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "E-Commerce Website",
      src: ecom,
      hrefLive: "https://ecom-estore.netlify.app/",
      hrefCode: "https://github.com/Rahmathirshad/E-Commerce---Website",
    },
    {
      id: 2,
      name: "Face Recognition App",
      src: facereco,
      hrefLive: "https://aifacereco.netlify.app/",
      hrefCode: "https://github.com/Rahmathirshad/Face-Recognition-App",
    },
    {
      id: 3,
      name: "Personal Portfolio",
      src: personalportfolio,
      hrefLive: "https://rahmathirshad.netlify.app/",
      hrefCode: "https://github.com/Rahmathirshad/Personal-Portfolio",
    },
    {
      id: 4,
      name: "Robo Friends App",
      src: robofriends,
      hrefLive: "https://rahmathirshad.github.io/robo-friends-app/",
      hrefCode: "https://github.com/Rahmathirshad/robo-friends-app",
    },
    {
      id: 5,
      name: "Todo's",
      src: todos,
      hrefLive: "https://mydailytodos.netlify.app/",
      hrefCode: "https://github.com/Rahmathirshad/Todos-App",
    },
    {
      id: 6,
      name: "File Downloader",
      src: filed,
      hrefLive: "https://filedownloader1.netlify.app/",
      hrefCode: "https://github.com/Rahmathirshad/File_Downloader--Vanilla_JavaScript",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-20">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div className="">
              <img
                src={src}
                alt=""
                className="rounded-t-md "
              />
              <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefLive} target="_blank" rel="noreferrer">Live</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                <a href={hrefCode} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
