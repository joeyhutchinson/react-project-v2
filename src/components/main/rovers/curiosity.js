// Sample api queries
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

import React, { Component } from "react";
import dotenv from "dotenv";
import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGallery from "./rover-image-gallery/rover-image-gallery";
import RoverDetailsTable from "./rover-details-table";

import "./rover-components.css";

dotenv.config();

class Curiosity extends Component {
  state = {
    rover: "curiosity",
    isManifestLoading: true,
    isImageDataLoading: true,
    manifestData: [],
    imageData: {},
    maxSol: '',
    selectedSol: 654,
    availableCameras: {},
    selectedCamera: 'FHAZ'
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
            isManifestLoading: false,
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
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.selectedSol}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            isImageDataLoading: false,
            imageData: data.photos
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

  componentDidUpdate() {

  }

  render() {

    return (
      <main>
        <ScrollToTopOnMountClass />
        <div className="content">
          <h1>Curiosity</h1>
          <RoverDetailsTable
            imageManifestData={this.state.manifestData}
            isManifestLoading={this.state.isManifestLoading}
            readableDate={this.props.readableDate}
          />
          <div className="leading-content">
            <img
              src="https://cdn.vox-cdn.com/thumbor/g_uh5bmEj-wE4gW6ZYeZdc29fso=/0x14:1907x1285/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/37181616/mahli-selfie-1b.0.0.jpg"
              alt=""
            />
            <h2>Overview</h2>
            <p>
              The Mars Science Laboratory and its rover centerpiece, Curiosity,
              is the most ambitious Mars mission yet flown by NASA. The rover
              landed on Mars in 2012 with a primary mission to find out if Mars
              is, or was, suitable for life. Another objective is to learn more
              about the Red Planet's environment.
            </p>
            <p>
              In March 2018, it celebrated 2,000 sols (Mars days) on the planet,
              making its way from Gale Crater to Aeolis Mons (colloquially
              called Mount Sharp), where it has looked at geological information
              embedded in the mountain's layers. Along the way, it also has
              found extensive evidence of past water and geological change.
            </p>
          </div>
          <h2>Cameras and imagery</h2>
          <p>Curiosity is packed with no fewer than 17 cameras to shoot high-quality photos and videos in black-and-white, color, and 3-D stereo of the Martian landscape. While scientists are no doubt quite eager for the information that these images will contain, most of us can live vicariously through the rover and experience some breathtaking views on Mars.</p>
          <h3>Available imagery</h3>
          <RoverImageGallery
            imageManifestData={this.state.manifestData}
            imageGalleryData={this.state.imageData}
            isManifestLoading={this.state.isManifestLoading}
            isImageDataLoading={this.state.isImageDataLoading}
          />
          </div>
      </main>
    );
  }
}
export default Curiosity;
