import React from "react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { formatDate } from "@/utils/formateDate";
const ProjectCard = (props) => {
  const { project, isAll } = props;
  return (
    <div
      className={`border rounded-xl h-full flex max-sm:flex-col ${
        isAll ? "flex-col" : ""
      } p-3 gap-4 duration-700 m-1`}
    >
      <img
        src={project["projectImage"]}
        className="h-40 sm:max-w-56 w-full pb-1 rounded-xl "
      ></img>
      <div className="py-3">
        <div className=" pb-3 text-sm flex items-center gap-1">
          <FaGithub></FaGithub>
          <Link
            href={project.githubLink}
            target="_blank"
            className="text-[#59666c] text-[8px] truncate"
          >
            {project.githubLink}
          </Link>
        </div>
        <Link
          href={`/project/${project["_id"]}`}
          className="text-base hover:underline text-blue-600 overflow-auto"
        >
          {project["description"][0]}
        </Link>
        <div className="text-[#59666c] text-[10px] pt-2">
          {formatDate(project["startDate"]) +
            " - " +
            formatDate(project["endDate"])}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
