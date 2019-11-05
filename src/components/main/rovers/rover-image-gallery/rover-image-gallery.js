import React, {useState, useEffect} from 'react';
import dotenv from "dotenv";

import GalleryThumbnailItems from "../rover-image-gallery/gallery-thumbnail-items"
import ModalThumbnailItems from "../rover-image-gallery/modal-thumbnail-items"
import ModalFeatureImages from "../rover-image-gallery/modal-feature-images"
import RoverGalleryForm from "../rover-image-gallery/rover-gallery-form"

dotenv.config();

const RoverImageGallery = (props) =>  {

  // ---------- STATE DATA

  //Static fixed data
  const [maxSol, setMaxSol] = useState('');

  // Data set during API Call
  const [isImageDataLoading, setIsImageDataLoading] = useState(true);
  const [allImageData, setAllImageData] = useState([]);
  
  // Data filtered by image gallery form]
  const [selectedSol, setSelectedSol] = useState(0); // INITIAL PREFILL - starts at 0
  const [selectedCameraForm, setSelectedCameraForm] = useState('');
  const [imageGalleryImages, setImageGalleryImages] = useState([]);

  // Data used for image gallery transitions, and image style and selection
  const [imageIndex, setImageIndex] = useState(0);
  const [modalStyle, setModalStyle] = useState({});
  const [featureImage,setFeatureImage] = useState(0);


  // ---------- API CALL

  useEffect(() => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover}/photos?sol=${selectedSol}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;

    let makeAPICall = async () => {
      let data = await fetch(url);
      let imageData = await data.json();
      setAllImageData(imageData.photos);
      setIsImageDataLoading(false);
    };
    makeAPICall();
  }, [selectedSol, props.rover]);

  // ---------- FORM FUNCTIONALITY

  // Handle submit from form
  const handleFormSubmit = (sol, camera) => {

    setSelectedSol(sol);
    setSelectedCameraForm(camera);

    console.log("handle submit in gallery", sol, camera)

    let imageArray = [];
    setImageGalleryImages();

    // reset form on submit
    setSelectedSol(0)
    let manifest = props.imageManifestData.photos
    setSelectedCameraForm(String(manifest[0].cameras[0]));
    
  };

  // ---------- IMAGE GALLERY BUTTON FUNCTIONALITY 
  
  const leftClick = () => {
    setImageIndex(prevState => prevState - 1);
  }

  const rightClick = () => {
    setImageIndex(prevState => prevState + 1);
  }

  // Modal buttons
  const openModal = (imageIndex) => {
    setModalStyle({display: "block"});
    setFeatureImage(imageIndex);
  }

  const closeModal = () => {
    setModalStyle({display: "none"})
  }


  if ((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading) === true) {
    return (
      <div className="image-gallery-wrapper">
        <div className="image-gallery">
        <p style={{color: "#3ba7ce"}}>Image gallery is loading...</p>
        </div>
      </div>
    )
  } else {
  

    const maxSol = props.imageManifestData.max_sol;
    const images = imageGalleryImages
    // let test = () => {
    //   let selectedImage = String(7);
    //   let returnData = allImageData[selectedImage];
    //   console.log(returnData.img_src);
    //   console.log(maxSol)
    // }
    // test();
      return (
        <>
          <div className="image-gallery-wrapper">
            <div><p style={{color: "#fff", fontSize: "0.9rem" }}>Select a mission day (sol) and camera type below, then click the 'Create' button to generate a gallery of images taken by the rover on that particular day. You can then click on any image to open it up in the full page gallery.</p>
            </div>

            <RoverGalleryForm 
              isManifestLoading={props.isManifestLoading} 
              imageManifestData={props.imageManifestData} 
              handleFormSubmit={handleFormSubmit}
              selectedSol={selectedSol}
              selectedCameraForm={selectedCameraForm}
              solDataArray={props.solDataArray}
            />

            <div className="image-gallery">
              <button className="left-arrow" onClick={leftClick} disabled={imageIndex === 0}>&#10094;</button>
              {/* In page image thumbnail gallery */}
              <ul className="thumbnail-gallery">

              <GalleryThumbnailItems
                isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false} 
                thumbnailImages={imageGalleryImages} 
                imageIndex={imageIndex} 
                openModal={openModal}
              />

              </ul>
              <button className="right-arrow" onClick={rightClick}>&#10095;</button>
              {/* disabled={imageIndex === images.length - 1} */}
            </div>
            <div className="caption-text">
            (Images: © NASA/JPL/University of Arizona)
          </div>
          </div>
          <div id="lightbox-gallery" className="modal" style={modalStyle}>
          <span className="close cursor" onClick={closeModal}>&times;</span>
          <div className="modal-content">
          <button className="modal-feature-left-arrow" disabled={imageIndex === 0}>&#10094;</button>
          <ul className="modal-feature-gallery">
            {/* Modal feature images */}

            <ModalFeatureImages 
              images={imageGalleryImages} 
              imageIndex={imageIndex} 
              isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false} 
              featureImage={featureImage}
            />
          </ul>
          <button className="modal-feature-right-arrow">&#10095;</button>
          {/* disabled={imageIndex === images.length - 1} */}
          {/* Modal image thumbnails */}
          <button className="modal-thumbnail-left-arrow" onClick={leftClick} disabled={imageIndex === 0}>&#10094;</button>
          <ul className="modal-thumbnail-gallery">
          
          <ModalThumbnailItems 
            images={imageGalleryImages} 
            imageIndex={imageIndex} 
            isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false } 
            openModal={openModal}
          />
          
          </ul>
          <button className="modal-thumbnail-right-arrow" onClick={rightClick}>&#10095;</button>
          {/* disabled={imageIndex === images.length - 1} */}
          </div>
          <div className="caption"><span>Mission Day (Sol) No. {selectedSol} - Camera {selectedCameraForm}</span></div>
          </div>
          </>

    )
  }
}

export default RoverImageGallery;

// onClick={leftArrow()} disabled={imageIndex === 0}
// onClick={rightArrow()} disabled={imageIndex === thumbnailImages.length - 1}

// const thumbnailStyle = {
//   transform: `translateX(-${imageIndex * (100 / thumbnailImages.length)}%)`
// };
