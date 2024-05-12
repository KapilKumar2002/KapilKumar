import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Tab = (props) => {
  const { tab, index } = props;
  const pathName = usePathname();

  return (
    <div>
      <Link href={tab.href} className="">
        <div
          className={`w-min ${
            pathName == tab.href
              ? "text-orange-600"
              : pathName === "/" && index === 0
              ? "text-orange-600"
              : "text-gray-500"
          } cursor-pointer`}
        >
          <div className="flex justify-center items-center w-full gap-1">
            {tab.icon}
            <span className="max-sm:text-xs">{tab.title}</span>
          </div>
          <div
            className={`w-full h-[2px] ${
              pathName == tab.href
                ? "bg-orange-600"
                : pathName === "/" && index === 0
                ? "bg-orange-600"
                : null
            }`}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default Tab;
