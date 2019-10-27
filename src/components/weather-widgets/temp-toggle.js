import React, { useState } from "react";

function TempToggle() {
  const [temp, setTemp] = useState("celcius");

  return (
    <div className="temp-toggle">
      <div className="temp-label">&#176;C</div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
      <div className="temp-label">&#176;F</div>
    </div>
  );
}

export default TempToggle;
