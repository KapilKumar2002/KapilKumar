import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ExpandableCard = (props) => {
  const { question, answer } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-4 justify-between w-full items-center cursor-pointer"
      >
        <p
          className={`${
            !open ? "overflow-hidden whitespace-nowrap truncate" : null
          } w-full max-md:text-sm max-sm:text-xs`}
        >
          {question}
        </p>
        <div className="sm:h-8 sm:w-8 max-sm:p-2  text-xs border border-violet-400 rounded-md flex justify-center items-center">
          {open ? (
            <IoIosArrowUp className="text-gray-600" />
          ) : (
            <IoIosArrowDown className="text-gray-600" />
          )}
        </div>
      </div>
      <div
        className={`${
          open ? "h-full" : "hidden"
        } duration-700 leading-5 text-gray-500 text-sm`}
      >
        {answer}
      </div>
    </div>
  );
};

export default ExpandableCard;
