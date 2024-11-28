import React from 'react';
import "./experience.css"

const Experience = () => {
  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');</style>
      <section name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-24">
        <section class="design-section">
          <div className="pb-2 lg:pl-52 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Work Experience
            </p>
            <p className="py-6">I have total 1 year and 8 months of experience</p>
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
                <li>Developed highly functional user interface for web
                application leveraging React.JS to solve business problems
                </li>
                <li>
                Solely designed and developed hybrid mobile application
                from scratch using React Native
                </li>
                <li>
                Implemented scalable, high-speed, reusable components
                using ES6 concepts resulted in 35% code reduction
                </li>
                <li>
                Collaborated with back-end team to integrate RESTful APIs to collect JSON data using axios, ensuring seamless data flow by reducing 15% time, used redux thunk for state management
                </li>
                <li>
                Integrated JWT authentication, upload/download files,
multiple dashboards, server side data tables and
pagination, complex forms, infinite scrolling, background
and foreground services, data searching, etc
                </li>
                <li>
                Implemented responsive and visually appealing UI to
                enhance the user experience using modern CSS frameworks
                </li>
                <li>
                Performed rigorous testing to identify and fix the bugs
using Chrome DevTools resulting in improving application
performance by 25%
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
