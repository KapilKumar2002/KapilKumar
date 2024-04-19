import React from "react";

const Title = (props) => {
  const { icon, title } = props;
  return (
    <div className="p-5 flex gap-2 items-center text-gray-500 ">
      {icon}
      <span className="font-semibold md:text-lg max-md:text-md">{title}</span>
    </div>
  );
};

export default Title;
