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
  boldText1: "FrontEnd",
  check : false,
  boldText2: "Flutter Developer",
  extra: ["FrontEnd Developer", "Flutter Developer", "Education"],
  description:
    "with hands-on experience in designing dynamic interfaces and ensuring app stability across Android devices. Proficient in backend development with expertise in Node.js, Express.js, and MongoDB, delivering scalable solutions for social media and e-commerce applications. Demonstrated ability to implement secure user authentication and data management, showcasing strong problem-solving skills and commitment to client satisfaction.",
};


const linkedInData = {
  icon: (
    <FaLinkedin className="text-2xl bg-gray-100 rounded-lg p-1" />
  ),
  title: "Linkedin",
  link: "https://www.linkedin.com/in/vishal-virdi",
  Name: "Vishal Virdi",
  boldText1: "I",
  boldText2: "",
  extra: [],
  check : true,
  description:
    "am from Hoshiarpur, Punjab, holds a Bachelor's degree in Information Technology from the Indian Institute of Information Technology, Una. My journey includes valuable internships at TalentMonk and Aimerse Technologies, where I showcased adeptness in React.js and Flutter development, focusing on UI/UX refinement and seamless API integration. Alongside my technical prowess in languages such as C++ and Python, I has also delved into database management with MongoDB. My problem-solving acumen, coupled with a passion for innovative solutions, marks me as a promising talent in the tech industry.",
};

export default function All() {
  return (
    <div className="flex max-[1100px]:flex-col-reverse gap-10 duration-700">
      <div className="md:w-[700px] w-full flex flex-col gap-5 duration-700">
        <ResumeCard data={resumeCardData} />
        <ProjectSlider />
        <ResumeCard data={linkedInData}/>
        <Discussions />
      </div>
      <AboutCard />
    </div>
  );
}
