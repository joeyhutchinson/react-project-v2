import React, {useEffect} from 'react';

import "./rover-components.css";


// imageManifestData={this.state.manifestData}
// imageGalleryData={this.state.imageData}
// isLoading={this.state.isLoading}

const RoverImageGallery = (props) => {

  useEffect(() => {
  },[])

  if (props.isLoading === true) {
    return (
      <div className="image-gallery-wrapper">
        <h2>Image Gallery</h2>
        <div className="image-gallery">
        <p style={{color: "#3ba7ce"}}>Image gallery is loading...</p>
        </div>
      </div>
    )
  } else {
    let slideIndex = 1;

    const plusSlides = (n) => {
      showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
      showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
      var i;
      var slides = document.getElementsByClassName("rover-image-lrg");
      var dots = document.getElementsByClassName("thumbnail");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style = {display: "block"};
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
    showSlides(slideIndex);
      return (
          <div className="image-gallery-wrapper">
            <h2>Image Gallery</h2>
          <div className="image-gallery">
            {/* <!-- Full-width images with number text --> */}
            <div className="rover-image-lrg">
              <div className="numbertext">1 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            <div className="rover-image-lrg">
              <div className="numbertext">2 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            <div className="rover-image-lrg">
              <div className="numbertext">3 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            <div className="rover-image-lrg">
              <div className="numbertext">4 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            <div className="rover-image-lrg">
              <div className="numbertext">5 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            <div className="rover-image-lrg">
              <div className="numbertext">6 / 6</div>
                <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt="" />
            </div>

            {/* <!-- Next and previous buttons --> */}
            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>

            {/* <!-- Image text --> */}
            <div className="caption-container">
              <p id="caption"></p>
            </div>

            {/* <!-- Thumbnail images --> */}
            <div className="row">
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"  onClick={currentSlide(1)} alt="" />
              </div>
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" onClick={currentSlide(2)} alt="" />
              </div>
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" onClick={currentSlide(3)} alt="" />
              </div>
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" onClick={currentSlide(4)} alt="" />
              </div>
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" onClick={currentSlide(5)} alt="" />
              </div>
              <div className="column">
                <img className="thumbnail cursor" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" onClick={currentSlide(6)} alt="" />
              </div>
            </div>
            </div>
          </div>
      )
    }
}

export default RoverImageGallery;
