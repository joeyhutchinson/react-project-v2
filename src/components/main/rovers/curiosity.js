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
          let manifestInfo = data.photo_manifest.photos
          console.log(`this is manifest in solData`, manifestInfo[0].earth_date)
          const solData = [];
          for ( let i = 0; i < manifestInfo.length; i++ ) {
            solData.push(manifestInfo[i].sol)
          }
          console.log(solData)
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
    let manifestData = this.state.manifestData.photos
    console.log(manifestData)

    let solData = this.state.solDataArray; 
    let solIndexNum = solData.indexOf(parseInt(sol, 10));
    console.log(solIndexNum)
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
export default Curiosity;
