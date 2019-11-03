import React from 'react';

// thumbnailTranslation={modalFeatureStyle}

const ModalFeatureImages = (props) => {
  
  if (props.isLoading === true) {
    return( null )
  } else {
    const isFeatureImage = ( props.featureImage === 1) ? {display: "block"} : {display: "none"};

      return (
              <li className="modal-feature-container" style={isFeatureImage}>
                <img className="feature-image" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" alt=""/>
              </li>
      )
    }
}  

export default ModalFeatureImages;
