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
      const modalthumbnailStyle = {
        transform: `translateX(-${(props.imageIndex) * 30}vw)`
    }

      return (
        <>
              <li className="modal-thumbnail-container" onClick={() => props.openModal(0)} style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" onClick={() => props.openModal(0)} style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486272784EDR_F0481570NCAM00415M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg" alt=""/>
              </li>
            <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
              <li className="modal-thumbnail-container" style={modalthumbnailStyle}>
                <img className="modal-thumbnail-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
        </> 
      )
    }
}  

export default ModalThumbnailItems;
