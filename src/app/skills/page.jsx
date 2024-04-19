import Link from "next/link";
import React from "react";
import { FaUserShield } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiShieldStarFill } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi2";
import { FaNode } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { MdGeneratingTokens } from "react-icons/md";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandDjango } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { BiShieldQuarter } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiHoppscotch } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { RiCodeSFill } from "react-icons/ri";
const page = () => {
  return (
    <div className="md:w-[700px] w-full flex flex-col gap-5 duration-700">
      <div className="p-5 border rounded-xl">
        <div className="flex gap-2 ">
          <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
            <FaUserShield className="text-2xl bg-gray-100 rounded-lg p-1" />
          </div>
          <div>
            <div>FrontEnd</div>
            <p className="text-xs text-gray-400">en.frontend.org</p>
          </div>
        </div>
        <div className="flex gap-5 text-xs pt-5 flex-wrap">
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center ">
            <FaHtml5 className="h-5 w-10" />
            HTML
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <IoLogoCss3 className="h-5 w-10" />
            CSS
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <IoLogoJavascript className="h-5 w-10" />
            JS
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <FaReact className="h-5 w-10" />
            React
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <TbBrandNextjs className="h-5 w-10" />
            Next.js
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center text-xs">
            <SiTailwindcss className="h-5 w-5" />
            <p className="flex  flex-col justify-center items-center">
              Tailwind
            </p>
            CSS
          </div>
          <div className="border p-2 rounded-lg flex  flex-col justify-center items-center">
            <SiTypescript className="h-5 w-10" />
            TS
          </div>
        </div>
      </div>
      <div className="p-5 border rounded-xl">
        <div className="flex gap-2 ">
          <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
            <RiShieldStarFill className="text-2xl bg-gray-100 rounded-lg p-1" />
          </div>
          <div>
            <div>BackEnd</div>
            <p className="text-xs text-gray-400">en.backend.org</p>
          </div>
        </div>
        <div className="flex gap-5 text-xs pt-5 flex-wrap">
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center ">
            <FaNode className="h-5 w-10" />
            Node.js
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiExpress className="h-5 w-10" />
            Express
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiMongodb className="h-5 w-10" />
            MongoDB
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <GrMysql className="h-5 w-10" />
            MySQL
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <BiLogoPostgresql className="h-5 w-10" />
            PostgreSQL
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <TbBrandDjango className="h-5 w-10" />
            Django
          </div>
          <div className="border p-2 rounded-lg flex  flex-col justify-center items-center">
            <MdGeneratingTokens className="h-5 w-10" />
            JWT
          </div>
        </div>
      </div>
      <div className="p-5 border rounded-xl">
        <div className="flex gap-2 ">
          <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
            <HiShieldCheck className="text-2xl bg-gray-100 rounded-lg p-1" />
          </div>
          <div>
            <div>Flutter</div>
            <p className="text-xs text-gray-400">en.flutter.org</p>
          </div>
        </div>
        <div className="flex gap-5 text-xs pt-5 flex-wrap">
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center ">
            <RiFlutterFill className="h-5 w-10" />
            Flutter
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <DiDart className="h-5 w-10" />
            Dart
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <IoLogoFirebase className="h-5 w-10" />
            Firebase
          </div>
        </div>
      </div>
      <div className="p-5 border rounded-xl">
        <div className="flex gap-2 ">
          <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
            <BiShieldQuarter className="text-2xl bg-gray-100 rounded-lg p-1" />
          </div>
          <div>
            <div>Other Tools and Languages</div>
            <p className="text-xs text-gray-400">en.tools&languages.org</p>
          </div>
        </div>
        <div className="flex gap-5 text-xs pt-5 flex-wrap">
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center ">
            <TbBrandVscode className="h-5 w-10" />
            VSCode
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiAndroidstudio className="h-5 w-10" />
            Studio
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiPostman className="h-5 w-10" />
            Postman
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiPycharm className="h-5 w-10" />
            Pycharm
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <SiHoppscotch className="h-5 w-10" />
            Hoppscotch
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <RiCodeSFill className="h-5 w-10" />C
          </div>
          <div className="border p-2 rounded-lg flex flex-col justify-center items-center">
            <TbBrandCpp className="h-5 w-10" />
            C++
          </div>
          <div className="border p-2 rounded-lg flex  flex-col justify-center items-center">
            <FaPython className="h-5 w-10" />
            Python
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
