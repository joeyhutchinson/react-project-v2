import React, { Component} from "react";


import ScrollToTopOnMountClass from "../scroll-to-top-class";

import "./map-style.css"

class MarsMap extends Component {

  

  render() {
    const mapSourceUrl = "//www.arcgis.com/apps/Embed/index.html?webmap=dc9cf380ffcc4b9f95ada642c615e2ae&extent=-108.0145,-17.7115,4.4484,48.2281&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=dark"

    return (
      <main>
        <ScrollToTopOnMountClass/>
        <div className="content map-content">
       
          <h1>Map</h1>
          <p>Explore the entire Mars surface by zooming in and searching the interactive map below. (Map developed and supplied by IntegraShare Solutioneering, Inc. (<a href="https://www.arcgis.com/home/webmap/viewer.html?webmap=dc9cf380ffcc4b9f95ada642c615e2ae" target="_blank" rel="external">ArcGIS link</a>)</p>
          <div 
            id="map"
            style={{width: "100%", height: "60vh"}}  
          >
            <div className="embed-container"><iframe width="300" height="100" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Mars Map" src={mapSourceUrl}></iframe>
            </div>

          </div>
        </div>
      </main>
    );
  }
}
export default MarsMap;
