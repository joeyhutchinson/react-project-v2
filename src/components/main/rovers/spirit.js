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
    manifestDataPhotos: [],
    solDataArray: [],
    allImageData: [],
    selectedSol: 0,
    selectedCameraForm: '',
    allImageUrls: [],
    imageGalleryImages: [`https://mars.nasa.gov/mer/gallery/all/2/f/150/2F139689079EFF6200P1210L0M1-BR.JPG`,
      `https://mars.nasa.gov/mer/gallery/all/2/n/150/2N139687846EFF6104P1938L0M1-BR.JPG`, 
      'https://mars.nasa.gov/mer/gallery/all/2/n/150/2N139689294EFF6200P1826R0M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/2/f/100/2F135251873EFF27MCP1201L0M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/2/n/100/2N135232528EFF2700P1556L0M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/2/f/050/2F130796339EDN09BVP1111R0M1-BR.JPG', 
      'https://mars.nasa.gov/mer/gallery/all/2/f/050/2F130804974EDN09EHF0006L0M1-BR.JPG', 
      `https://mars.nasa.gov/mer/gallery/all/2/n/002/2N126543636EFF0100P1505L0M1-BR.JPG`, 
      `https://mars.nasa.gov/mer/gallery/all/2/r/001/2R126468012EDN0000P1002L0M1-BR.JPG`]
  };
  //   Fetch manifest data via API call and set to component state
  //   Alert if data is not available and doesn't load
  fetchManifestData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${this.state.rover}/?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          let manifestInfoPhotos = data.photo_manifest.photos
          let solData = [];
          for ( let i = 0; i < manifestInfoPhotos.length; i++ ) {
            solData.push(manifestInfoPhotos[i].sol)
          }
          let camera = String(manifestInfoPhotos[0].cameras[0])
          this.setState({
            isManifestLoading: false,
            isImageDataLoading: false,
            manifestData: data.photo_manifest,
            manifestDataPhotos: data.photo_manifest.photos,
            solDataArray: solData,
            selectedCameraForm: camera
          });
        },
        error => {
          if (error) {
            alert("Rover details and imagery is currently unavailable");
          }
        }
      );
  };

  componentDidMount() {
    // Make Manifest Data API call when component mounts
    this.fetchManifestData();
    // this.fetchImageData();
  }
        
  // ---------- FORM FUNCTIONALITY

  // Handle submit from form
  handleFormSubmit = (sol, camera) => {
    this.setState({
      selectedSol: sol,
      selectedCameraForm: camera,
      isImageDataLoading: true
    });

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.selectedSol}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          let imageData = data.photos
          let manifestInfo = this.state.manifestDataPhotos
          let imageDataCamera = [];
          for ( let i = 0; i < imageData.length; i++ ) {
            if (imageData[i].camera.name === camera) {
              imageDataCamera.push(manifestInfo[i].sol)
            }
          }
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

    let manifestDataPhotos = this.state.manifestDataPhotos

    let solData = this.state.solDataArray; 
    let solIndexNum = solData.indexOf(parseInt(sol, 10));
    let totalImagesAvail = manifestDataPhotos[solIndexNum].total_photos;

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
