import { Input } from "antd";
import React from "react";
import { useState } from "react";

const InputContainer = () => {
  const [value, setValue] = useState("");

  const handleWeather = () => {
    //
  };

  return (
    <div className="center-container">
      <Input
        placeholder="Enter city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleWeather();
        }}
        className="input-container "
      />
    </div>
  );
};

export default InputContainer;
