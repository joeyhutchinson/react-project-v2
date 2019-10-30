// Sample api queries
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

import React, {Component} from "react";
import ScrollToTopOnMountClass from "../../scroll-to-top-class";
import RoverImageGalleryV2 from "./rover-image-gallery";
import RoverDetailsTable from './rover-details-table'
import CuriosityLandingVideo from "./rover-multimedia/curiosity-landing-video"

class CuriosityV2 extends Component {

  state = {
    rover: 'curiosity',
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
            isLoading: true,
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
        isLoading: true,
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
          <h1>Curiosity</h1>
          <RoverDetailsTable imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData}/>
          <img src="https://cdn.vox-cdn.com/thumbor/g_uh5bmEj-wE4gW6ZYeZdc29fso=/0x14:1907x1285/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/37181616/mahli-selfie-1b.0.0.jpg" alt="" style={{width: "40%", float: "right", margin: "0 0 2rem 2rem"}}/>
          <p>
          YO!! Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance, and a drill to collect powdered rock samples. It hunts for special rocks that formed in water and/or have signs of organics.
          </p>
          <RoverImageGalleryV2 imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData}/>
        
        <h2>Rover Landing</h2>
        <p>Mars Science Laboratory arrived at Mars through technological innovations that tested a completely new landing method. The spacecraft descended on a parachute, then during the final seconds before landing, the landing system fired rockets to allow it to hover while a tether lowered Curiosity to the surface. The rover landed on its wheels, the tether was cut, and the landing system flew off to crash-land a safe distance away.</p>
        <p>You can watch an animation of the rover's landing below.</p>
        <CuriosityLandingVideo/>
        <div className="caption-text">VIDEO: 7 Minutes of Terror: The Challenges of Getting to Mars - NASA Jet Propulsion Laboratory</div>
        </div>
      </main>
      
    );
  }
}
export default CuriosityV2;
