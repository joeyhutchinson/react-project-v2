import React from 'react';

const GalleryThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      const thumbnailStyle = {transform: `translateX(-${(props.imageIndex) * 20}vw)`}

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
