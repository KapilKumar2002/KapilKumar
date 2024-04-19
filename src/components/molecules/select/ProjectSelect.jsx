import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ProjectSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
}
