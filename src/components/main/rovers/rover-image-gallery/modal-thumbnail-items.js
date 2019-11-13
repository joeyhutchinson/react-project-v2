import React from 'react';

const ModalThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      const modalthumbnailStyle = {transform: `translateX(-${(props.imageIndex) * 250}px)`}

      let thumbnailImages = props.images;
      return thumbnailImages.map((image, i) => {
        return (
              <li className="modal-thumbnail-container" key={i} onClick={() => props.openModal(i)} style={modalthumbnailStyle}>
                <img className={`modal-thumbnail-image ${ (i === props.imageIndex) ? `active` : `` }`} src={image} alt=""/>
              </li>
        )
      })
  }
}
    
export default ModalThumbnailItems;
