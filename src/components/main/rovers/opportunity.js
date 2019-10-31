import React, { Component } from "react";

import dotenv from "dotenv";

import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery";
import RoverDetailsTable from './rover-details-table';
import OpportunityMissionVideo from './rover-multimedia/opportunity-mission-video'

dotenv.config();

class Opportunity extends Component {
  state = {
    rover: 'opportunity',
    isLoading: true,
    manifestData: [],
    imageData: []
}
//   Fetch manifest data via API call and set to component state
//   Alert if data is not available and doesn't load
fetchManifestData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${
        this.state.rover}/?api_key=${
            process.env.REACT_APP_NASA_API_KEY}`;
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
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
      this.state.rover}/photos?sol=1000&api_key=${
    process.env.REACT_APP_NASA_API_KEY}`;
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
        <ScrollToTopOnMountClass/>
        <div className="content">
          <h1>Opportunity</h1>
          <RoverDetailsTable imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData} isLoading={this.state.isLoading} readableDate={this.props.readableDate}/>
          <RoverImageGallery imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData} isLoading={this.state.isLoading}/>
          <OpportunityMissionVideo/>
          <div className="caption-text">VIDEO: NASA Rover Completes Mars Mission - NASA Jet Propulsion Laboratory</div>
        </div>
      </main>
    );
  }
}
export default Opportunity;
