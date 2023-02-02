import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocMediaLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
        <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Rahmath_Irshad_Resume.pdf",
      download: true,
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahmath-irshad-74781988/",
    },
    {
      id: 3,
      child: (
        <>
        <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rahmathirshad",
    },
    {
      id: 4,
      child: (
        <>
        <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rahmathirshad@gmail.com",
    },
  ];

  return (
    <div className="lg:hidden">
      <ul className="flex">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className="px-1"
          >
            <a
              href={href}
              className="text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocMediaLinks