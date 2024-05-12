"use client";

import ExperienceCard from "@/components/molecules/ExperienceCard";
import React, { useState, useEffect } from "react";

export default function Experience() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/experience");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="md:w-[700px] w-full flex flex-col gap-3  duration-700">
      {experiences
        ? experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))
        : null}
    </div>
  );
}
