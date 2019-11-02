import React, {useState} from 'react';
import GalleryThumbnailItems from "../rover-image-gallery/gallery-thumbnail-items"

import "../rover-components.css";


// imageManifestData={this.state.manifestData}
// imageGalleryData={this.state.imageData}
// isLoading={this.state.isLoading}

const RoverImageGallery = (props) =>  {

  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [thumbnailImages, setThumbnailImages] = useState([ {a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}, {f: 6}, {g: 7}, {h: 8}, {i: 9}]);

  let leftClick = () => {
    console.log('this is left click')
    setThumbnailIndex(prevState => prevState - 1);
  }

  let rightClick = () => {
    console.log('this is right click')
    setThumbnailIndex(prevState => prevState + 1);
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
          <div className="image-gallery-wrapper">
            <div className="image-gallery">
              <button className="left-arrow" onClick={leftClick} disabled={thumbnailIndex === 0}>&#10094;</button>
              <ul className="thumbnail-gallery">
              <GalleryThumbnailItems thumbnailImages={thumbnailImages} thumbnailIndex={thumbnailIndex} isLoading={props.isLoading}/>
              </ul>
              <button className="right-arrow" onClick={rightClick} disabled={thumbnailIndex === thumbnailImages.length - 1}>&#10095;</button>
            </div>
          </div>
    )
  }
}

export default RoverImageGallery;

// onClick={leftArrow()} disabled={imageIndex === 0}
// onClick={rightArrow()} disabled={imageIndex === thumbnailImages.length - 1}

// const thumbnailStyle = {
//   transform: `translateX(-${imageIndex * (100 / thumbnailImages.length)}%)`
// };
