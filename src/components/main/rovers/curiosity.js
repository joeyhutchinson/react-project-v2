// Sample api queries
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

import React from "react";
import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery";

function Curiosity(props) {
  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="content">
        <h1>Curiosity</h1>
        <RoverImageGallery rover={"curiosity"}/>
      </div>
    </main>
  );
}
export default Curiosity;
