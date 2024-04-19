"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Title";
import { TiDocumentText } from "react-icons/ti";

const ProjectSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };

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
        console.log(data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    projects && (
      <div className="flex flex-col w-full max-sm:hidden duration-700">
        <Title
          icon={<TiDocumentText className="text-2xl" />}
          title={"Projects"}
        />
        <Slider {...settings} className="grid grid-cols-3">
          {projects.map((data) => (
            <ProjectCard project={data} isAll={true} />
          ))}
        </Slider>
      </div>
    )
  );
};

export default ProjectSlider;
