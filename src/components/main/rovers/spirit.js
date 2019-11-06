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
    isImageDataLoading: true,
    manifestData: [],
    solDataArray: [],
    allImageData: [],
    selectedSol: 0,
    selectedCameraForm: '',
    allImageUrls: [],
    imageGalleryImages: [`https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG`,
      `https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg`, 
      'https://mars.nasa.gov/mer/gallery/all/1/p/010/1P129079663EFF0224P2537R7M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/1/p/100/1P137064757EFF2019P2355L7M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/1/p/100/1P137063250EFF2010P2353L7M1-BR.JPG', 
      'https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630370503597I01_DXXX.jpg', 
      'https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631160503676I01_DXXX.jpg', 
      `https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630270503587E02_DXXX.jpg`, 
      `https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630420405139E02_DXXX.jpg`]
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
            alert("Rover details and imagery is currently unavailable");
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
          let imageData = data.photos
          this.setState({
            allImageData: imageData,
            isImageDataLoading: false
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
    this.fetchImageData();
  }

  // ---------- FORM FUNCTIONALITY

  // Handle submit from form
  handleFormSubmit = (sol, camera) => {

    this.setState({
      selectedSol: sol,
      SelectedCameraForm: camera
    });
    console.log("handle submit in gallery", sol, camera)
    let manifestData = this.state.imageManifestData

    let solData = this.state.solDataArray; 
    let solIndexNum = solData.indexOf(parseInt(sol, 10));
    let totalImagesAvail = manifestData[solIndexNum].total_photos;

    // Set array of image src urls for sol
    let imageSrcArray = []
    let allImageData = this.state.allImageData
    for ( let i=0; i < (totalImagesAvail - 1); i++) {
      imageSrcArray.push(allImageData[i].img_src)
    }
    this.setState({
      allImageUrls: imageSrcArray
    });

    // Get nth image out of returned images
    let num = (totalImagesAvail > 25) ? Math.floor(totalImagesAvail / 25) : totalImagesAvail;
    console.log(`This is the number yo!`, num)
    let galleryImagesArray = [];
    if (totalImagesAvail > 25) {
      let num = Math.floor(totalImagesAvail / 25);
      for ( let i=0; i < 24; i++) {
        galleryImagesArray.push(allImageData[i*num].img_src)
      }
    } else if (totalImagesAvail <= 25) {
        for ( let i=0; i < 24; i++) {
          galleryImagesArray.push(allImageData[i].img_src)
        }
      }
    this.setState({
      imageGalleryImages: galleryImagesArray
    });

    console.log(`This is the images yo!`, this.state.imageGalleryImages)

    // reset form on submit
    this.setState({
      selectedSol: 0,
      selectedCameraForm: String(manifestData[0].cameras[0])
    });
    
  };

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
            imageManifestData={this.state.manifestData}
            isManifestLoading={this.state.isManifestLoading}
            solDataArray={this.state.solDataArray}
            allImageData={this.state.allImageData}
            isImageDataLoading={this.state.isImageDataLoading}
            selectedSol={this.state.selectedSol}
            selectedCameraForm={this.state.selectedCameraForm}
            allImageUrls={this.state.imageUrls}
            imageGalleryImages={this.state.imageGalleryImages}
            handleFormSubmit={this.handleFormSubmit}
          />
          </div>
      </main>
    );
  }
}
export default Spirit;
