import React, {useEffect} from 'react';

import "./rover-components.css";


// imageManifestData={this.state.manifestData}
// imageGalleryData={this.state.imageData}
// isLoading={this.state.isLoading}

const RoverImageGallery = (props) => {

  useEffect(() => {
  },[])

  if (props.isLoading === true) {
    return (
      <div className="image-gallery-wrapper">
        <h2>Image Gallery</h2>
        <div className="image-gallery">
        <p style={{color: "#3ba7ce"}}>Image gallery is loading...</p>
        </div>
      </div>
    )
  } else {
      return (
          <div className="image-gallery-wrapper">
            <h2>Image Gallery</h2>
          
          </div>
      )
    }
}

export default RoverImageGallery;
