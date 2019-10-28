// Sample api queries
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&page=2&api_key=DEMO_KEY

import React from "react";
import ScrollToTopOnMountClass from "../../scroll-to-top-class";

function Spirit(props) {
  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="content">
        <h1>Spirit</h1>
      </div>
    </main>
  );
}
export default Spirit;
