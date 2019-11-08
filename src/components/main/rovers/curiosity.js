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
    errorActive: false,
    manifestData: [],
    manifestDataPhotos: [],
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

  componentDidCatch(error, info) {
    this.setState({ errorActive: true });
    console.log(error, info);
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
    if (this.state.errorActive === true) {
      return (
        <main style={{backgroundColor: "#fff", width: "100%"}}>
          <ScrollToTopOnMountClass />
          <div className="content" style={{backgroundColor: "#fff", width: "50%", margin: "auto"}}>
            <h2>Oops! Something went wrong!</h2>
            <p>Please give the Universe a moment to pull itself together, and then try your action again.</p>
            <img src="https://yogimehtab.com/wp-content/uploads/2017/06/sad-mars.jpg" alt=""style={{width: "25%"}}></img>
          </div>
        </main>
      )
    } else {

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
}
export default Curiosity;
