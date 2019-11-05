import React, { Component } from "react";
import dotenv from "dotenv";

import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery/rover-image-gallery";
import RoverDetailsTable from "./rover-details-table";

import "./rover-components.css";

dotenv.config();

class Opportunity extends Component {
  state = {
    rover: "opportunity",
    isManifestLoading: true,
    manifestData: [],
    solDataArray: []
  };
  //   Fetch manifest data via API call and set to component state
  //   Alert if data is not available and doesn't load
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
    // Make API call when component mounts
    this.fetchManifestData();
  }

  render() {
    return (
      <main>
        <ScrollToTopOnMountClass />
        <div className="content">
          <h1>Opportunity</h1>
          <RoverDetailsTable
            imageManifestData={this.state.manifestData}
            isManifestLoading={this.state.isManifestLoading}
            readableDate={this.props.readableDate}
          />
          <div className="leading-content">
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1200px-NASA_Mars_Rover.jpg"
              alt=""
            />
            <h2>Overview</h2>
            <p>
              The Opportunity rover stopped communicating with Earth when a
              severe Mars-wide dust storm blanketed its location in June 2018.
              After more than a thousand commands to restore contact, engineers
              in the Space Flight Operations Facility at NASA's Jet Propulsion
              Laboratory (JPL) made their last attempt to revive Opportunity
              Tuesday, to no avail. The solar-powered rover's final
              communication was received June 10.
            </p>
            <p>
              Designed to last just 90 Martian days and travel 1,100 yards
              (1,000 meters), Opportunity vastly surpassed all expectations in
              its endurance, scientific value and longevity. In addition to
              exceeding its life expectancy by 60 times, the rover traveled more
              than 28 miles (45 kilometers) by the time it reached its most
              appropriate final resting spot on Mars – Perseverance Valley.
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
export default Opportunity;
