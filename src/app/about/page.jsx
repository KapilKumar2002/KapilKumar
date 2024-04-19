import About_Card from "@/components/molecules/About_Card";
import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";

export default function About() {
  return (
    <div className="md:w-[700px] w-full flex flex-col gap-4 duration-700">
      <About_Card
        name={"IIITUNA"}
        web={"www.iiitu.com"}
        duration={"2020 - 2024"}
        title={
          "Indian Institute of Information Technology, Una ( Himachal Pradesh )"
        }
        description={
          "lorem ipsum dolor sit amet, consectetur adip nonum soc duis natoque penatibus et justo euismod lorem ipsum dolor sit amet, consectetur adip"
        }
      />
      <About_Card
        name={"DSSMINT College"}
        web={"www.dssmint.com"}
        title={
          "Dayanand Sarswati Inter College Kasimpur Power House, Aligarh (Uttar Pradesh)"
        }
        description={
          "lorem ipsum dolor sit amet, consectetur adip nonum soc duis natoque penatibus et justo euismod lorem ipsum dolor sit amet, consectetur adip"
        }
      />
    </div>
  );
}
