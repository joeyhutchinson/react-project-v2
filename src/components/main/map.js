//  https://developers.google.com/maps/documentation/javascript/get-api-key
// https://ti.arc.nasa.gov/tech/asr/groups/intelligent-robotics/planetary/maps/

import React, { Component, createRef } from "react";
import dotenv from "dotenv";

import ScrollToTopOnMountClass from "../scroll-to-top-class";

dotenv.config();

class GoogleMap extends Component {

  

  render() {

    return (
      <main>
        <ScrollToTopOnMountClass/>
        <div className="content">
       
          <h1>Map</h1>

          <div 
            id="map"
            style={{width: "50vw", height: "50vh"}}  
          >

          </div>

        </div>
      </main>
    );
  }
}
export default GoogleMap;
