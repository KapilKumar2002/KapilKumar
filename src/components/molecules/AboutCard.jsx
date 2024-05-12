import React from "react";
import Typewriter from "typewriter-effect";
import myPhoto from "@/assets/images/myphoto.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div className="border-[1px] rounded-xl xl:w-96 md:w-[700px] w-full h-min duration-700">
      <div className="p-6 max-md:p-3">
        <div className="md:text-lg md:font-bold font-semibold">Kapil Kumar</div>
        <div className="text-sm text-[#59666c]">
          <Typewriter
            className="max-md:text-xs"
            options={{
              strings: ["Full Stack Developer", "Flutter Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Image
          src={myPhoto}
          alt="image not found"
          className="xl:h-44 lg:h-60 max-lg:h-80 h-52 max-[450px]:h-44 rounded-md duration-700"
        ></Image>
        <div className="text-xs font-normal pt-4  text-gray-400">
          Skilled <span className="font-bold text-gray-600">Full Stack</span>{" "}
          and{" "}
          <span className="font-bold text-gray-600 ">Flutter Developer. </span>{" "}
          As a recent graduate from the Indian Institute of Information
          Technology, Una Himachal Pradesh, with a B.Tech in Information
          Technology, I bring a wealth of experience and expertise to the table.
          With a strong foundation in Full-Stack Development and specialized
          skills in Flutter, I've honed my craft through hands-on experience,
          including a 3-months internship in MERN stack development at
          Talentmonk and an additional 7 months dedicated to mastering Flutter
          development. My passion lies in creating seamless, user-centric
          solutions that push the boundaries of technology. With a keen eye for
          detail and a commitment to continuous learning, I am poised to tackle
          any challenge in the ever-evolving landscape of software development.
        </div>
      </div>
      <hr></hr>
      <div className="p-6 max-md:p-3">
        <div className="text-lg font-medium pb-2">Factsheet</div>
        <h1 className="text-[15px] font-medium">Born</h1>
        <div className="text-[10px] font-normal text-gray-400 pb-2">
          <h2>Kapil Kumar</h2>
          <h2>(2002-01-12) 12 January 2002 (age 22)</h2>
          <h2>Faridabad, Haryana</h2>
        </div>
        <h1 className="text-[15px] font-medium">Citizenship</h1>
        <h2 className="text-[10px] font-normal text-gray-400 pb-2">
          Indian (2002-present)
        </h2>
        <h1 className="text-[15px] font-medium">Occupations</h1>
        <div className="text-[10px] font-normal text-gray-400 pb-2">
          <h2>Student</h2>
          <h2>Developer</h2>
        </div>
      </div>
      <hr></hr>
      <div className="p-6 max-md:p-3">
        <div className="text-lg font-medium pb-2">Profiles</div>
        <div className="flex gap-2">
          <Link
            href={"https://www.linkedin.com/in/kapil-kumar-mathur/"}
            target="_blank"
            className=" border border-blue-600 text-xs rounded-lg flex gap-1 items-center p-1 text-blue-600"
          >
            <FaLinkedin></FaLinkedin>
            LinkedIn
          </Link>
          <Link
            href={"https://www.instagram.com/iamkeps1/"}
            target="_blank"
            className=" border border-red-500 text-xs rounded-lg flex gap-1 items-center p-1 text-red-500"
          >
            <FaInstagramSquare></FaInstagramSquare>
            Instagram
          </Link>
          <Link
            href={"https://github.com/KapilKumar2002"}
            target="_blank"
            className=" border border-black text-xs rounded-lg flex gap-1 items-center p-1"
          >
            <FaGithub></FaGithub>
            Github
          </Link>
        </div>
        <div className="flex gap-2 pt-2">
          <Link
            href={"https://leetcode.com/Kapil012002/"}
            target="_blank"
            className=" border border-yellow-600 text-xs rounded-lg flex gap-1 items-center p-1 text-yellow-600"
          >
            <SiLeetcode></SiLeetcode>
            Leetcode
          </Link>
          <Link
            href={"https://www.geeksforgeeks.org/user/kapil012002/"}
            target={"_blank"}
            className=" border border-green-600 text-xs rounded-lg flex gap-1 items-center text-green-600 p-1"
          >
            <SiGeeksforgeeks></SiGeeksforgeeks>
            GFG
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="px-6 py-4 text-[10px] font-normal flex justify-between text-gray-400 ">
        Data by Me
        <div className="underline">feedback</div>
      </div>
    </div>
  );
};

export default AboutCard;
