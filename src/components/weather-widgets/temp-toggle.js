import React, { useState } from "react";

function TempToggle() {
  const [temp, setTemp] = useState("celcius");

  return (
    <div className="temp-toggle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}

export default TempToggle;
