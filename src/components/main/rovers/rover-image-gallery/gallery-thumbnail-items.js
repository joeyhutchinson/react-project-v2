import React from 'react';

// thumbnailTranslation={thumbnailStyle}

const GalleryThumbnailItems = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
      let lengthThumbnails = Object.keys(props.thumbnailImages).length;
      const thumbnailStyle = {
        transform: `translateX(-${(props.thumbnailIndex) * 30}vw)`
    }
    console.log('this is thumbnailstyle', thumbnailStyle)

      return (
        <>
              <li className="thumbnail-container" onClick={() => props.openModal(1)} style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" onClick={() => props.openModal(1)} style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486272784EDR_F0481570NCAM00415M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="thumbnail-container" style={thumbnailStyle}>
                <img className="thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg" alt=""/>
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
