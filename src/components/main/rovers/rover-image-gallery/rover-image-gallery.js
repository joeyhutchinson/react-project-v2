import React, {useState, useEffect} from 'react';
import GalleryThumbnailItems from "../rover-image-gallery/gallery-thumbnail-items"
import ModalThumbnailItems from "../rover-image-gallery/modal-thumbnail-items"
import ModalFeatureImages from "../rover-image-gallery/modal-feature-images"
import RoverGalleryForm from "../rover-image-gallery/rover-gallery-form"

const RoverImageGallery = (props) =>  {

  //Static data
  const [maxSol, setMaxSol] = useState('');
  
  // Data filtered by image gallery form
  const [imageGalleryImages, setImageGalleryImages] = useState(['1','2','3']);
  const [selectedSol, setSelectedSol] = useState(365); // TEST PREFILL
  const [selectedCamera, setSelectedCamera] = useState('');
  const [availableCameras, setAvailableCameras] = useState([]);

  // Data used for image gallery transitions, and image style and selection
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [modalStyle, setModalStyle] = useState({});
  const [featureImage,setFeatureImage] = useState(0);

  // Form functionality

  // Handle submit from form
  const handleFormSubmit = (solDay, camera) => {
    let solIndex = String(solDay);
    let imageArray = [];
    setSelectedSol(solDay)
    console.log("handle submit in gallery", solDay, camera)
    // if (props.imageGalleryData.sol === Number(solDay)) {
    //   return imageArray
    // }
    setImageGalleryImages();
  };

  
  // Image gallery left and right button functionality
  // In page buttons
  const leftClick = () => {
    setThumbnailIndex(prevState => prevState - 1);
  }

  const rightClick = () => {
    setThumbnailIndex(prevState => prevState + 1);
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
    const imageData = props.imageGalleryData
    const maxSol = props.imageManifestData.max_sol;
    const images = imageGalleryImages
    let test = () => {
      let selectedImage = String(7);
      let returnData = imageData[selectedImage];
      console.log(returnData.img_src);
      console.log(maxSol)
    }
    test();
      return (
        <>
          <div className="image-gallery-wrapper">

            <RoverGalleryForm 
              isManifestLoading={props.isManifestLoading} 
              imageManifestData={props.imageManifestData} 
              handleFormSubmit={handleFormSubmit}
              selectedSol={selectedSol}
            />

            <div className="image-gallery">
              <button className="left-arrow" onClick={leftClick} disabled={thumbnailIndex === 0}>&#10094;</button>
              {/* In page image thumbnail gallery */}
              <ul className="thumbnail-gallery">

              <GalleryThumbnailItems 
                thumbnailImages={imageGalleryImages} 
                thumbnailIndex={thumbnailIndex} 
                isImageDataLoading={props.isImageDataLoading} 
                openModal={openModal}
              />

              </ul>
              <button className="right-arrow" onClick={rightClick}>&#10095;</button>
              {/* disabled={thumbnailIndex === images.length - 1} */}
            </div>
            <div className="caption-text">
            (Images: © NASA/JPL/University of Arizona)
          </div>
          </div>
          <div id="lightbox-gallery" className="modal" style={modalStyle}>
          <span className="close cursor" onClick={closeModal}>&times;</span>
          <div className="modal-content">
          <button className="modal-feature-left-arrow" disabled={thumbnailIndex === 0}>&#10094;</button>
          <ul className="modal-feature-gallery">
            {/* Modal feature images */}

            <ModalFeatureImages 
              thumbnailImages={imageGalleryImages} 
              thumbnailIndex={thumbnailIndex} 
              isImageDataLoading={props.isImageDataLoading} 
              isManifestLoading={props.isManifestLoading} 
              featureImage={featureImage}
            />
          </ul>
          <button className="modal-feature-right-arrow">&#10095;</button>
          {/* disabled={thumbnailIndex === images.length - 1} */}
          {/* Modal image thumbnails */}
          <button className="modal-thumbnail-left-arrow" onClick={leftClick} disabled={thumbnailIndex === 0}>&#10094;</button>
          <ul className="modal-thumbnail-gallery">
          
          <ModalThumbnailItems 
            thumbnailImages={imageGalleryImages} 
            thumbnailIndex={thumbnailIndex} 
            isImageDataLoading={props.isImageDataLoading} 
            isManifestLoading={props.isManifestLoading} 
            openModal={openModal}
          />
          
          </ul>
          <button className="modal-thumbnail-right-arrow" onClick={rightClick}>&#10095;</button>
          {/* disabled={thumbnailIndex === images.length - 1} */}
          </div>
          <div className="caption"><span>Mission Day (Sol) No. {selectedSol} - Camera {selectedCamera}</span></div>
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
