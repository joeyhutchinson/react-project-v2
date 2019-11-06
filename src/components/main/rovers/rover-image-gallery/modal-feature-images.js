import React from 'react';

// thumbnailTranslation={modalFeatureStyle}

// images={imageGalleryImages} 
// imageIndex={thumbnailIndex} 
// isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false} 
// featureImage={featureImage}

const ModalFeatureImages = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
    const isFeatureImage = ( props.featureImage === 0 ) ? {display: "block"} : {display: "none"}; // Change to === props.imageIndex when set up
    let thumbnailImages = props.images;
      return thumbnailImages.map((image, i) => {
        return (
          <li className="modal-feature-container" key={i} style={isFeatureImage}>
          <img className="feature-image" key={`image-${i}`}src={image} alt=""/>
        </li>
        )
      })
  }
}

export default ModalFeatureImages;
