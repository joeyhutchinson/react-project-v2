import React, { useState } from 'react';

function TempToggle () {

  const [temp, setTemp] = useState("celcius");

  return(
    <div className="temp-toggle">
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider"></span>
      </label>
    </div>
  )
} 

export default TempToggle;