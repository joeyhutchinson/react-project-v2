//  https://developers.google.com/maps/documentation/javascript/get-api-key
// https://ti.arc.nasa.gov/tech/asr/groups/intelligent-robotics/planetary/maps/

import React from "react";
import ScrollToTopOnMountClass from "../scroll-to-top-class";

const Maps = (props) => {
  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="content">
        <h1>Map</h1>
      </div>
    </main>
  );
}
export default Maps;
