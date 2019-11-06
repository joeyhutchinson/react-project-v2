import React from 'react';

// images={imageGalleryImages} 
// imageIndex={thumbnailIndex} 
// isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false } 
// openModal={openModal}

const ModalThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      // let lengthThumbnails = Object.keys(props.thumbnailImages).length;
      const modalthumbnailStyle = {transform: `translateX(-${(props.imageIndex) * 30}vw)`}

      let thumbnailImages = props.images;
      return thumbnailImages.map((image, i) => {
        return (
              <li className="modal-thumbnail-container" key={i} onClick={() => props.openModal(i)} style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src={image} alt=""/>
              </li>
        )
      })
  }
}
    
export default ModalThumbnailItems;
