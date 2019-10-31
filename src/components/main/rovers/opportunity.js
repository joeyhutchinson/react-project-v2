import React, { Component } from "react";

import dotenv from "dotenv";

import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery";
import RoverDetailsTable from "./rover-details-table";

dotenv.config();

class Opportunity extends Component {
  state = {
    rover: "opportunity",
    isLoading: true,
    manifestData: [],
    imageData: []
  };
  //   Fetch manifest data via API call and set to component state
  //   Alert if data is not available and doesn't load
  fetchManifestData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${this.state.rover}/?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            isLoading: false,
            manifestData: data.photo_manifest
          });
        },
        error => {
          if (error) {
            alert("Image gallery is currently unavailable");
          }
        }
      );
  };

  //   Fetch image data via API call and set to component state
  //   Alert if data is not available and doesn't load
  fetchImageData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            isLoading: false,
            imageData: data
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
    this.fetchImageData();
  }

  render() {
    return (
      <main>
        <ScrollToTopOnMountClass />
        <div className="content">
          <h1>Opportunity</h1>
          <RoverDetailsTable
            imageManifestData={this.state.manifestData}
            imageGalleryData={this.state.imageData}
            isLoading={this.state.isLoading}
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
          <RoverImageGallery
            imageManifestData={this.state.manifestData}
            imageGalleryData={this.state.imageData}
            isLoading={this.state.isLoading}
          />
        </div>
      </main>
    );
  }
}
export default Opportunity;
