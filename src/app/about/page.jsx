import About_Card from "@/components/molecules/About_Card";
import React from "react";

export default function About() {
  return (
    <div className="md:w-[700px] w-full flex flex-col gap-4 duration-700">
      <About_Card
        name={"IIITUNA"}
        web={"www.iiitu.com"}
        duration={"2020 - 2024"}
        title={
          "Indian Institute of Information Technology, Una Himachal Pradesh"
        }
        description={
          "At Indian Institute of Information Technology Una, as a B.Tech (Information Technology) student, I immerse myself in vital subjects like Data Structures & Algorithms, Computer Networks, Object Oriented Programming, Database Management Systems, and Operating System. Through intensive training and hands-on experience, I grasp fundamental concepts crucial for today's IT landscape. IIIT Una cultivates an interactive learning environment, molding me into a proficient IT professional ready to thrive and innovate in real-world settings."
        }
      />
      <About_Card
        name={"DSSMINT College"}
        web={"www.dssmint.com"}
        title={
          "Dayanand Sarswati Inter College Kasimpur Power House, Aligarh Uttar Pradesh"
        }
        description={
          "D.S.S.M Inter College Kasimpur Power House, a private institution in Aligarh, Uttar Pradesh, provided me with a comprehensive education, where I completed my 10th and 12th standard with PCM. During my time there, I consistently ranked among the top three students in my class among all sections, demonstrating a strong aptitude for science and mathematics. These academic achievements reflect my dedication and commitment to excellence in my studies."
        }
      />
    </div>
  );
}
