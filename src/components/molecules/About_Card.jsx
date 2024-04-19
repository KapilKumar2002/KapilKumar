import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";

function About_Card(props) {
  const { name, web, title, description, duration } = props;
  return (
    <div className="p-5 border rounded-xl flex flex-col gap-2">
      <div className="flex  gap-2">
        <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
          <PiGraduationCapFill className="text-2xl bg-gray-100 rounded-lg p-1" />
        </div>
        <div>
          <div className="max-lg:text-sm">{name}</div>
          <a href={web} className="text-xs text-gray-400">
            {web}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="heading">{title}</h1>
        <p className="leading-5 text-gray-500  text-justify text-ellipsis max-md:text-xs">
          {description}
        </p>
      </div>
      {duration && (
        <div className="">
          <hr />
          <div className="text-xs text-gray-500 mt-2 max-md:text-xs">
            <p>{duration}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About_Card;
