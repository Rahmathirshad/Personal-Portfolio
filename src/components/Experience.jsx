// import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import bootstrap from "../assets/bootstrap.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
// import git from "../assets/git.png";
// import npm from "../assets/npm.png";
// import vscode from "../assets/vscode.png";
// import photoshop from "../assets/photoshop.png";
// import netlify from "../assets/netlify.png";

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: reactImage,
//       title: "React",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 2,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 3,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 4,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-400",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind CSS",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src: bootstrap,
//       title: "Bootstrap",
//       style: "shadow-indigo-500/50",
//     },
//     {
//       id: 7,
//       src: git,
//       title: "Git",
//       style: "shadow-orange-600",
//     },
//     {
//       id: 8,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 9,
//       src: npm,
//       title: "Npm",
//       style: "shadow-red-500",
//     },
//     {
//       id: 10,
//       src: vscode,
//       title: "VS Code",
//       style: "shadow-blue-400",
//     },
//     {
//       id: 11,
//       src: netlify,
//       title: "Netlify",
//       style: "shadow-blue-300",
//     },
//     {
//       id: 12,
//       src: photoshop,
//       title: "Photoshop",
//       style: "shadow-blue-500",
//     },
//   ];

//   return (
//     <div
//       name="experience"
//       className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="py-6">Currently working with the most used Front-end techs and tool<br></br>available for Web Development</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React from 'react';
import "./experience.css"

const Experience = () => {
  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');</style>
      <section name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-24">
        <section class="design-section">
          <div className="pb-2 lg:pl-52 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Work Experience
            </p>
            <p className="py-6">I have total 1+ years of experience</p>
          </div>
          <div class="timeline">
            <div class="timeline-empty"></div>
            <div class="timeline-middle">
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-component timeline-content">
              <h1><span className="font-bold text-sky-400 text-lg">Front-End Developer</span> - <span className="font-bold text-sky-400">LEGALE</span></h1>
              <p className="inline border-b-2 border-gray-500 text-sm pb-1">MAY 2023 - Present | Hyderabad, India</p>
              <ul className="list-disc mt-2">
                <li>Lead the design and development of highly functional UI for
                  web application and hybrid mobile application using React.JS
                  and React Native
                </li>
                <li>
                  Implementing responsive user interface, reusable
                  components and new features to solve business problems
                </li>
                <li>
                  Fixing bugs and optimizing the user experience
                </li>
                <li>
                  Integrated user authentication system, payment gateway,
                  multiple dashboards, server side data tables, complex forms,
                  etc
                </li>
                <li>
                  Successfully delivered first version of hybrid mobile
                  application, built from scratch using React Native
                </li>
              </ul>
            </div>
            <div class="timeline-component timeline-content">
              {/* <h1>CSS</h1>
              <p>Some Text.</p> */}
            </div>
            <div class="timeline-middle">
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-empty">
            </div>

            <div class="timeline-empty">
            </div>

            {/* <div class="timeline-middle">
              <div class="timeline-circle"></div>
            </div>
            <div class=" timeline-component timeline-content">
              <h3>Javascript</h3>
              <p>Some Text.</p>
            </div> */}
          </div>
        </section>
      </section>
    </>
  )
}

export default Experience