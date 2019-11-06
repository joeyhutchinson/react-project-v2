import React from 'react';

// isLoading={((props.isManifestLoading && props.isImageDataLoading) || (props.isManifestLoading || props.isImageDataLoading)) ? true : false} 
// thumbnailImages={imageGalleryImages} 
// imageIndex={imageIndex} 
// openModal={openModal}

const GalleryThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      // let lengthThumbnails = Object.keys(props.thumbnailImages).length;
      const thumbnailStyle = {transform: `translateX(-${(props.imageIndex) * 30}vw)`}

      let thumbnailImages = props.thumbnailImages;
      return thumbnailImages.map((image, i) => {
        return (
                <li className="thumbnail-container" key={i} onClick={() => props.openModal(i)} style={thumbnailStyle}>
                  <img className="thumbnail-image" src={image} alt=""/>
                </li>)
      })
    }
}
export default GalleryThumbnailItems;
