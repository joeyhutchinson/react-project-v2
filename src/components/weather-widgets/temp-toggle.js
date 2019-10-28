import React from "react";

function TempToggle (props) {
  let handleTempToggle = () => {
    props.handleTempToggle()
  }


  return (
    <div className="temp-toggle">
      <div className="temp-label">&#176;F</div>
      <label className="switch">
        <input type="checkbox" onClick={() => handleTempToggle()}/>
        <span className="slider" />
      </label>
      <div className="temp-label">&#176;C</div>
    </div>
  );
}

export default TempToggle;
