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
        "I believe my combination of technical skills, experience, and passion for the MERN stack and Flutter along with Firebase makes me a strong candidate. I have a solid foundation in MongoDB, Express.js, React.js, and Node.js, with several successful projects under my belt where I've demonstrated my ability to build efficient and scalable applications. Additionally, my proactive approach to learning ensures that I stay updated with the latest technologies and best practices in the field. I'm confident that I can contribute effectively to your team and help drive the success of your projects.",
    },
    {
      question: "What is Kapil's strength?",
      answer:
        "My strength lies in my ability to quickly learn new technologies. For instance, I've learned Flutter and Firebase within just 1.5 months, React in 1 month, backend development in 1.5 months, and Python's Django REST Framework in 1 month as well. This rapid learning pace enables me to adapt swiftly to evolving technology landscapes and contribute effectively to projects requiring diverse skill sets.",
    },
    {
      question: "What are Kapil's weaknesses?",
      answer:
        "I've observed that when I encounter obstacles or bugs in a project, I tend to become deeply engrossed in finding a solution. This intense focus often makes it challenging for me to switch off until the issue is resolved. While I am driven by the desire to overcome challenges head-on, I've come to recognize the importance of taking regular breaks and not allowing work to consume me entirely. Striking a balance between problem-solving and self-care is crucial for maintaining long-term productivity and well-being.",
    },
    // {
    //   question: "What are Kapil's short term goals?",
    //   answer:
    //     "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    // },
    // {
    //   question: "What are Kapil's long term goals?",
    //   answer:
    //     "I am a quick learner of new technologies. I am backend developer as well as frontend developer.",
    // },
    {
      question: "What are Kapil's achievements?",
      answer:
        "My achievements highlight my technical expertise, leadership, and community engagement. I hold certificates in Full Stack Flutter Application Development from SkillUp by SimpliLearn and Secure Application Development from Udemy, demonstrating proficiency in building robust and secure applications. Achieving 5-star ratings in C++ and Python on HackerRank and solving over 300 coding questions on platforms like GeeksforGeeks and LeetCode showcase my strong problem-solving skills. Additionally, I've mentored over 10 juniors in Flutter and provided support for Flutter and API integration to a company employee. As the coordinator of the Cultural Fest Mridang at IIIT UNA, I led 13 performance teams, organizing a successful event that promoted creativity and cultural exchange within the community. These achievements reflect my commitment to excellence and continuous learning across technical and non-technical domains.",
    },
    {
      question: "What are Kapil's hobbies?",
      answer:
        "My hobbies encompass a blend of creativity, technical skill, and personal enjoyment. Immense satisfaction comes from delving into coding projects and honing skills through regular practice. Crafting intricate frontends for mobile and web applications, along with diving into API development, provides a thrilling challenge in creating innovative and user-centric solutions. Beyond the realm of technology, there's a deep passion for music. Singing and listening to songs serve as sources of relaxation and avenues for self-expression and emotional connection. Engaging in these hobbies allows for striking a harmonious balance between technical pursuits and personal interests, fostering both professional growth and individual fulfillment.",
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
            className="cursor-pointer px-2 bg-white py-1 border text-violet-500 justify-center border-violet-400 md:w-32 w-28 rounded-lg absolute left-[50%] -translate-y-[50%] -translate-x-[50%] flex gap-2 items-center"
          >
            <span className="font-semibold md:text-sm text-xs">
              {showAll ? "Show less" : "Show more"}
            </span>
            {showAll ? (
              <IoIosArrowUp className="max-md:text-sm" />
            ) : (
              <IoIosArrowDown className="max-md:text-sm" />
            )}
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
