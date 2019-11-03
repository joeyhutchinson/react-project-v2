import React, {useState, useEffect} from 'react';
import GalleryThumbnailItems from "../rover-image-gallery/gallery-thumbnail-items"
import ModalThumbnailItems from "../rover-image-gallery/modal-thumbnail-items"
import ModalFeatureImages from "../rover-image-gallery/modal-feature-images"

import "../rover-components.css";


// imageManifestData={this.state.manifestData}
// imageGalleryData={this.state.imageData}

const RoverImageGallery = (props) =>  {

  const [imageGalleryImages, setImageGalleryImages] = useState([]);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [modalStyle, setModalStyle] = useState({});
  const [featureImage,setFeatureImage] = useState(0);

  useEffect(() => {
    
  }, []);

  const leftClick = () => {
    setThumbnailIndex(prevState => prevState - 1);
  }

  const rightClick = () => {
    setThumbnailIndex(prevState => prevState + 1);
  }

  const openModal = (imageIndex) => {
    setModalStyle({display: "block"});
    setFeatureImage(imageIndex);
  }

  const closeModal = () => {
    setModalStyle({display: "none"})
  }


  if (props.isLoading === true) {
    return (
      <div className="image-gallery-wrapper">
        <div className="image-gallery">
        <p style={{color: "#3ba7ce"}}>Image gallery is loading...</p>
        </div>
      </div>
    )
  } else {
      return (
        <>
          <div className="image-gallery-wrapper">
            <div className="image-gallery">
              <button className="left-arrow" onClick={leftClick} disabled={thumbnailIndex === 0}>&#10094;</button>
              {/* In page image thumbnails */}
              <ul className="thumbnail-gallery">
              <GalleryThumbnailItems thumbnailImages={thumbnailImages} thumbnailIndex={thumbnailIndex} isLoading={props.isLoading} openModal={openModal}/>
              </ul>
              <button className="right-arrow" onClick={rightClick} disabled={thumbnailIndex === thumbnailImages.length - 1}>&#10095;</button>
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
            <ModalFeatureImages thumbnailImages={thumbnailImages} thumbnailIndex={thumbnailIndex} isLoading={props.isLoading} featureImage={featureImage}/>
            </ul>
            <button className="modal-feature-right-arrow" disabled={thumbnailIndex === thumbnailImages.length - 1}>&#10095;</button>
            {/* Modal image thumbnails */}
            <button className="modal-thumbnail-left-arrow" onClick={leftClick} disabled={thumbnailIndex === 0}>&#10094;</button>
            <ul className="modal-thumbnail-gallery">
          <ModalThumbnailItems thumbnailImages={thumbnailImages} thumbnailIndex={thumbnailIndex} isLoading={props.isLoading} openModal={openModal}/>
          </ul>
          <button className="modal-thumbnail-right-arrow" onClick={rightClick} disabled={thumbnailIndex === thumbnailImages.length - 1}>&#10095;</button>
          </div>
          <div><p>Mission Day (Sol) No. {props.selectedSol} - Camera {props.selectedCamera}</p></div>
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
