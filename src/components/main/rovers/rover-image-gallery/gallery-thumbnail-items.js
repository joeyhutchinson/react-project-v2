import React from 'react';

// thumbnailTranslation={thumbnailStyle}

const GalleryThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      let lengthThumbnails = Object.keys(props.thumbnailImages).length;
      const thumbnailStyle = {
        transform: `translateX(-${props.thumbnailIndex * (600 / lengthThumbnails)}%)`
    }
    console.log('this is thumbnailstyle', thumbnailStyle)

      return (
        <>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
            <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
        </> 
      )
    }
}  

export default GalleryThumbnailItems;
