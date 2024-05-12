import Link from "next/link";
import React from "react";
import { FaBuildingShield } from "react-icons/fa6";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { formatDate } from "@/utils/formateDate";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import ShowMoreText from "react-show-more-text";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoRedux } from "react-icons/bi";
const ExperienceCard = (props) => {
  const { experience } = props;

  const techStacks = {
    React: <SiMongodb className="text-green-700" />,
    "Node.js": <SiNodedotjs className="text-green-700" />,
    Express: <SiExpress className="text-blue-700" />,
    JavaScript: <SiJavascript className="text-yellow-700" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-700" />,
    HTML: <IoLogoHtml5 className="text-red-700" />,
    CSS: <FaCss3Alt className="text-cyan-700" />,
    "Redux Toolkit": <SiRedux className="text-black-700" />,
    Flutter: <RiFlutterFill className="text-cyan-700" />,
    Dart: <DiDart className="text-blue-500" />,
    "RESTful API": <TbApi />,
    Firebase: <IoLogoFirebase className="text-yellow-500" />,
    "Redux-Toolkit": <BiLogoRedux className="text-violet-700" />,
  };

  return (
    <div className="md:p-5 p-3 border rounded-xl flex flex-col gap-4 ">
      <div className="flex  gap-2">
        <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
          <FaBuildingShield className="text-2xl bg-gray-100 rounded-lg p-1" />
        </div>
        <div>
          <div className="max-md:text-sm">{experience["company"]}</div>
          <Link
            href={`${experience.companyLink}`}
            target="_blank"
            className="text-xs text-gray-400"
          >
            {experience["companyLink"]}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium text-blue-700 max-md:text-sm">
          {experience["jobTitle"]} -{" "}
          {experience["isIntern"] ? "Internship" : "Job"}
        </h1>

        <div>
          <ShowMoreText
            lines={2}
            more="Show more"
            less="Show less"
            className="content-css w-full text-justify"
            anchorClass="show-more-less-clickable"
            onClick={() => {}}
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {experience.description.map((description, index) => (
              <div key={index}>
                {Object.keys(description)
                  .filter((key) => key !== "_id") // Filter out _id field
                  .map((key) => (
                    <div key={key} className="text-justify max-md:text-xs">
                      <strong>{key}:</strong> {description[key]}
                    </div>
                  ))}
              </div>
            ))}
          </ShowMoreText>
        </div>
        <div className="mt-2 flex max-sm:flex-col gap-2">
          <span className="text-black max-md:text-sm">Tech-Stacks : </span>
          <div className="flex gap-4 flex-wrap">
            {experience["techStack"].map((tech) => (
              <div className="h-7 w-7 bg-gray-200 rounded-md flex justify-center items-center">
                {techStacks[tech]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xs text-gray-500 ">
        <p>
          From {formatDate(experience["startDate"])} to{" "}
          {formatDate(experience["endDate"])}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
