import React from 'react';

const ModalFeatureImages = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
    let thumbnailImages = props.images;
      return thumbnailImages.map((image, i) => {
        return (
          <li className="modal-feature-container" key={i} style={( i === props.featureImage ) ? {display: "block"} : {display: "none"}}>
          <img className="feature-image" key={`image-${i}`}src={image} alt=""/>
        </li>
        )
      })
  }
}

export default ModalFeatureImages;
