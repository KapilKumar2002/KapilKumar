import React from "react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import ShowMoreText from "react-show-more-text";

const ResumeCard = (props) => {
  const {
    icon,
    check,
    title,
    link,
    Name,
    boldText1,
    boldText2,
    extra,
    description,
  } = props.data;

  return (
    <div className="p-5 border rounded-xl ">
      <div className="flex  gap-2">
        <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
          {icon}
        </div>
        <div>
          <div>{title}</div>
          <p className="text-xs text-gray-400">{link}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href={`${link}`} target="_blank">
          {" "}
          <h1 className="heading hover:underline underline-offset-2 mt-1">
            {Name}
          </h1>
        </Link>
        <ShowMoreText
          lines={2}
          more="Show more"
          less="Show less"
          className="content-css w-full text-justify"
          anchorClass="show-more-less-clickable text-violet-400"
          onClick={() => {}}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          <span className="font-bold text-gray-600">{boldText1}</span>{" "}
          {`${check === false ? "and" : ""} `}{" "}
          <span className="font-bold text-gray-600 ">{boldText2}</span>{" "}
          {description}
        </ShowMoreText>
        <div className="mt-3 text-blue-700 flex gap-2 max-md:gap-1 flex-wrap max-md:text-sm max-xs:text-xs">
          {extra.map((item, index) => (
            <Link href={"/"} key={index} className="hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
