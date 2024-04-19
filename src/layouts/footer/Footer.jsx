"use client";
import React from "react";
import { FaBookOpen, FaLaptopCode, FaCode } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";

const sections = [
  {
    icon: <FaBookOpen />,
    title: "Academics",
    subsections: [
      [
        "Data Structure & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Operating System",
        "Computer Network",
      ],
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Stack",
    subsections: [
      [
        <p className="text-sm font-medium text-gray-800">FrontEnd</p>,
        "React",
        "Flutter",
        "NextJS",
        "HTML & CSS",
        "Tailwind CSS",
        <p className="text-sm font-medium text-gray-800">BackEnd</p>,
        "NodeJS",
        "ExpressJS",
        <p className="text-sm font-medium text-gray-800">Database</p>,
        "MongoDB",
        "MySQL",
        "Firebase",
      ],
    ],
  },
  {
    icon: <AiFillCode />,
    title: "Tools",
    subsections: [
      ["VS Code", "Android Studio", "Postman", "Hoppscotch", "Pycharm"],
    ],
  },
  {
    icon: <FaCode />,
    title: "Programming Languages",
    subsections: [["C & Cpp", "Javascript", "Python", "Dart"]],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <hr />
      <div className="duration-700 w-full gap-4 grid  max-lg:grid-cols-2 max-sm:grid-cols-1  grid-cols-4 py-8 px-8 md:px-16 lg:px-24 xl:px-32">
        {sections.map((section, index) => (
          <div key={index} id={index} className="text-lg font-medium">
            <div className="flex items-center gap-2">
              {section.icon}
              {section.title}
            </div>
            {section.subsections.map((subsection, idx) => (
              <div key={idx} className="text-sm font-light text-textColor">
                {subsection.map((item, i) => (
                  <div key={i} id={i}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr />
      <div className="text-sm font-light text-textColor flex flex-col justify-center items-center gap-1 p-4">
        <p>&copy; {currentYear} Vishal Virdi. All rights reserved.</p>
        <div className="pb-2 text-center">
          Unauthorized reproduction or distribution of this website's content is
          prohibited.
        </div>
      </div>
    </>
  );
};

export default Footer;
