"use client";
import myphoto from "../../assets/images/myphoto.jpeg";
import brave from "../../assets/images/brave.svg";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Tab from "@/components/molecules/Tab";
import { IoIosPerson } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
const Header = () => {
  const tabs = [
    { title: "All", icon: <IoSearch />, href: "/all" },
    { title: "About", icon: <IoIosPerson />, href: "/about" },
    { title: "Experience", icon: <TbTargetArrow />, href: "/experience" },
    { title: "Projects", icon: <BsPersonWorkspace />, href: "/projects" },
    { title: "Skills", icon: <TbDeviceDesktopCode />, href: "/skills" },
  ];

  return (
    <div className="w-full">
      <div className="flex max-md:flex-col  gap-4  items-center p-4 duration-700">
        <div className="w-40 flex justify-center items-center">
          <Image src={brave} alt="brave" className="" />
        </div>
        <div className="md:h-12 h-9 md:w-[700px] duration-700 w-full rounded-2xl bg-white border shadow-xl flex items-center justify-between">
          <span className="pl-7 max-md:text-xs">Kapil Kumar</span>
          <div className="flex items-center md:gap-7 gap-4 pr-4">
            <RxCross2 className="text-lg text-gray-400" />
            <hr className="md:h-8 h-6 w-[1px] bg-gray-300" />
            <IoSearch className="text-xl text-pink-400" />
          </div>
        </div>
      </div>
      <div className="overflow-auto scrollbar-hide max-md:px-4">
        <div className="md:w-[700px] w-full md:pl-20 xl:pl-[200px]  flex sm:gap-6 gap-3 duration-700">
          {tabs.map((tab, index) => (
            <Tab tab={tab} key={index} index={index} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
