import React, { useState } from "react";
import { TbMessage2Question } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ExpandableCard from "../molecules/ExpandableCard";
import Link from "next/link";
import Title from "../molecules/Title";
const Discussions = () => {
  let list = [
    {
      question: "Why should we hire you?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What is Kapil's strength?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What are Kapil's weaknesses?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What are Kapil's short term goals?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What are Kapil's long term goals?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What are Kapil's achievements?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
    {
      question: "What are Kapil's hobbies?",
      answer:
        "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  list = showAll ? list : list.slice(0, 4);

  return (
    <div className="rounded-xl border">
      <Title
        icon={<TbMessage2Question className="text-2xl" />}
        title={"Discussions"}
      />
      <hr />
      <div className="p-5 flex flex-col gap-2">
        {list.map((data, index) => (
          <div key={index} className="flex flex-col gap-4">
            <ExpandableCard question={data.question} answer={data.answer} />
            {index != list.length - 1 && <hr className="py-1" />}
          </div>
        ))}
      </div>
      <hr />
      <div className="h-14 lg:w-[700px] w-full relative">
        {list.length >= 4 && (
          <div
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer px-2 bg-white py-1 border text-violet-500 justify-center border-violet-400 w-32 rounded-lg absolute left-[50%] -translate-y-[50%] -translate-x-[50%] flex gap-2 items-center"
          >
            <span className="font-semibold text-sm">
              {showAll ? "Show less" : "Show more"}
            </span>
            {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        )}
        <div className="h-full w-full flex items-center justify-end p-5">
          <Link
            href={"/"}
            className="text-xs hover:underline text-gray-600 hover:text-violet-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
