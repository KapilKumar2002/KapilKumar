"use client";
import React from "react";
import AboutCard from "@/components/molecules/AboutCard";
import ResumeCard from "@/components/molecules/ResumeCard";
import ProjectSlider from "@/components/molecules/slider/ProjectSlider";
import Discussions from "@/components/discussions/Discussions";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
const resumeCardData = {
  icon: (
    <IoDocumentTextOutline className="text-2xl bg-gray-100 rounded-lg p-1" />
  ),
  title: "Resume",
  link: "en.Resume.org",
  Name: "Kapil Kumar - Resume",
  boldText1: "A Full Stack Developer",
  check: false,
  boldText2: "Flutter Developer",
  extra: ["Full Stack Developer", "Flutter Developer", "Education"],
  description:
    ". As a recent graduate from the Indian Institute of Information Technology, Una Himachal Pradesh, with a B.Tech in Information Technology, I bring a wealth of experience and expertise to the table. With a strong foundation in Full-Stack Development and specialized skills in Flutter, I've honed my craft through hands-on experience, including a 3-months internship in MERN stack development at Talentmonk and an additional 7 months dedicated to mastering Flutter development. My passion lies in creating seamless, user-centric solutions that push the boundaries of technology. With a keen eye for detail and a commitment to continuous learning, I am poised to tackle any challenge in the ever-evolving landscape of software development.",
};

const linkedInData = {
  icon: <FaLinkedin className="text-2xl bg-gray-100 rounded-lg p-1" />,
  title: "Linkedin",
  link: "https://www.linkedin.com/in/kapil-kumar-mathur/",
  Name: "Kapil Kumar",
  boldText1: "Looking for full time opportunities",
  boldText2: "OPEN TO WORK. ",

  extra: [],
  check: false,
  description:
    "Kapil Kumar, a B.Tech (Information Technology) student at Indian Institute of Information Technology, Una Himachal Pradesh. He is a MERN Stack Engineer as well as Flutter Developer with 3 months of internship experience and 7 months of internship experience respectively.",
};

export default function All() {
  return (
    <div className="flex max-[1100px]:flex-col-reverse gap-10 duration-700">
      <div className="md:w-[700px] w-full flex flex-col gap-5 duration-700">
        <ResumeCard data={resumeCardData} />
        <ProjectSlider />
        <ResumeCard data={linkedInData} />
        <Discussions />
      </div>
      <AboutCard />
    </div>
  );
}
