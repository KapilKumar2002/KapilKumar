"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import myPhoto from "../../../assets/images/myphoto.jpeg";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Title from "@/components/molecules/Title";
import { FaBookBookmark } from "react-icons/fa6";
import { useParams } from "next/navigation";
function page() {
  const [project, setProject] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProject() {
      try {
        if (!id) return;
        const response = await fetch(`/api/project/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        console.log(data);
        setProject(data.project);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }

    fetchProject();
  }, []);
  return (
    project && (
      <div className="md:w-[700px] w-full border p-4 rounded-xl">
        <div className="rounded-xl">
          <img
            src={project["projectImage"]}
            className="h-60 w-full object-fill rounded-xl"
            alt="Description of the image"
          />
        </div>
        <div className="flex justify-between pt-4">
          <h1 className="text-xl font-bold text-cyan-500 max-md:text-sm">
            {project["projectName"]}{" "}
          </h1>
          <Link
            href={project["githubLink"]}
            target="_blank"
            title="Github Link"
          >
            <FaArrowUpRightFromSquare className="text-blue-400" />
          </Link>
        </div>
        <p className="font-semibold text-cyan-500 mb-2 max-md:text-sm">
          {project["projectType"]} Project
        </p>

        <div className="flex flex-col gap-2 max-md:text-sm">
          Tech. Stack Used
          <div className="flex gap-3 flex-wrap">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="hover:bg-blue-200 bg-blue-100 hover:cursor-pointer border px-2 py-1 rounded-lg max-md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <ul className="list-disc p-4 max-md:text-xs">
          {project.description.map((line, index) => (
            <li> {line}</li>
          ))}
        </ul>

        <Title icon=<FaBookBookmark /> title={"References"} />
        <ul className="list-disc px-4">
          {project.references.map((line, index) => (
            <li className="text-blue-600 hover:underline md:font-bold md:text-lg text-sm">
              <Link href={`${line}`} target="_blank">
                {line}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default page;
