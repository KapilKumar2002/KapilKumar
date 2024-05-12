"use client";

import ProjectCard from "@/components/molecules/ProjectCard";
import Title from "@/components/molecules/Title";
import React, { useEffect, useState } from "react";
import { GrDocument } from "react-icons/gr";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    projects && (
      <div className="myWidth max-sm:w-full duration-700">
        <div className="flex justify-between items-center">
          <Title icon={<GrDocument />} title={"Projects"} />
          {/* <div>
            <label for="tech">Tech-Stack </label>
            <select name="tech" id="tech" className="border rounded-lg p-1">
              <option value="volvo">FrontEnd</option>
              <option value="mercedes">BackEnd</option>
              <option value="saab">Flutter</option>
              <option value="audi">Full Stack</option>
            </select>
          </div> */}
        </div>
        <div className="flex flex-col gap-4 ">
          {projects &&
            projects.map((data, index) => (
              <ProjectCard key={index} project={data} />
            ))}
        </div>
      </div>
    )
  );
};

export default Projects;
