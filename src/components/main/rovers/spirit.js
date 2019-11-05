import React, { Component } from "react";
import dotenv from "dotenv";
import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery/rover-image-gallery";
import RoverDetailsTable from "./rover-details-table";

import "./rover-components.css";

dotenv.config();

class Spirit extends Component {
  state = {
    rover: "spirit",
    isManifestLoading: true,
    manifestData: [],
    solDataArray: []
  };
  fetchManifestData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${this.state.rover}/?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          let manifest = data.photo_manifest.photos
          const solData = [];
          for ( let i = 0; i < manifest.length; i++ ) {
            solData.push(manifest[i].sol)
          }
          this.setState({
            isManifestLoading: false,
            manifestData: data.photo_manifest,
            solDataArray: solData
          });
        },
        error => {
          if (error) {
            alert("Image gallery is currently unavailable");
          }
        }
      );
  };

  componentDidMount() {
    // Make Manifest Data API call when component mounts
    this.fetchManifestData();
  }

  render() {
    return (
      <main>
        <ScrollToTopOnMountClass />
        <div className="content">
          <h1>Spirit</h1>
          <RoverDetailsTable
            imageManifestData={this.state.manifestData}
            isManifestLoading={this.state.isManifestLoading}
            readableDate={this.props.readableDate}
          />
          <div className="leading-content">
            <img
              src="https://www.extremetech.com/wp-content/uploads/2016/01/Opportunity-640x360.jpg"
              alt=""
            />
            <h2>Overview</h2>
            <p>
              The Spirit and Opportunity rovers together represented NASA's Mars
              Exploration Rover Mission (MER), part of the Mars Exploration
              Program. Launched about a month apart in 2003, the twin rovers’
              main scientific objective was to search for a range of rocks and
              soil types and then look for clues for past water activity on
              Mars. Spirit was launched first, at 17:58:47 UT June 10, 2003,
              from Cape Canaveral, Florida. The spacecraft was sent to an
              intermediate parking orbit around Earth (about 100 × 2,960 miles
              or 163 × 4,762 kilometers) at a 28.5-degree inclination.
            </p>
            <p>
              In March 2005, a peculiar and strange event— the passing of dust
              devils that swept dust from the top of the solar panels— increased
              power coming to Spirit from the usual 60 percent to 93 percent,
              thus significantly extending the lifetime of the mission.
            </p>
            <p>
              Unfortunately, on May 1, 2009, while driving south beside the
              western edge of a low plateau called Home Plate, Spirit became
              stuck in soft soil, its wheels unable to generate traction against
              the ground. On Nov. 28, another of Spirit’s six wheels, the right
              rear one, stopped working. After March 22, 2010, mission
              controllers at NASA's Jet Propulsion Laboratory (JPL) were not
              able to regain contact with Spirit.
            </p>
          </div>
          <h2>Cameras and imagery</h2>
          <p>Over the course of its mission on Mars, Opportunity took over 228,000 images. This included 15 360-degree color panoramas from the surface of Mars.</p>
          <h3>Available imagery</h3>
          <RoverImageGallery
            rover={this.state.rover}
            imageManifestData={this.state.manifestData}
            isManifestLoading={this.state.isManifestLoading}
            solDataArray={this.state.solDataArray}
          />
        </div>
      </main>
    );
  }
}
export default Spirit;
