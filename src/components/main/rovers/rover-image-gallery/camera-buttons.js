import React, {Component} from "react";

// isManifestLoading={props.isManifestLoading} 
// imageManifestData={props.imageManifestData.photos} 
// handleCameraChange={handleCameraChange} 
// solInput={solInput} 
// selectedCamera={selectedCamera}
// solIndex={solIndex}

class CameraButtons extends Component {

  handleCameraChange = e => {
    let camera = e.target.value;
    this.props.handleCameraChange(camera)
  }

  render() {

    if (this.props.isManifestLoading) {
      return null

    } else {

      const manifest = this.props.imageManifestData;
      console.log(this.props.solIndex)
      let cameraArray = manifest[this.props.solIndex].cameras;

      
      console.log(cameraArray)


      // Remove cameras that do not produce images from cameraArray
      const doNotIncludeCameraList = ['MAHLI', 'MARDI', 'MINITES'];
      for (let i = 0; i < cameraArray.length; i++) {
        for (let j = 0; j < doNotIncludeCameraList.length; j++) {
          if ( cameraArray[i] === doNotIncludeCameraList[j] ) {
                    cameraArray.splice(i, 1);
                    i--;
          }
        }
      }
       
      console.log(this.props.imageManifestData)
      console.log(cameraArray)
      console.log(this.props.selectedCamera)
      return cameraArray.map((camera, i) => {
        return (
          <React.Fragment>
            <input 
              className={`radioButton-${camera}`} 
              type="button" 
              key={`camera-${i}`} 
              name={`camera-${camera}`} 
              value={camera}
              style={{backgroundColor : (this.props.selectedCamera === camera ) ? "#ef9662" : "#333" }}
              onClick={this.handleCameraChange}
            >
            </input>
          </React.Fragment>
        )
      });
    }
  }
}

export default CameraButtons