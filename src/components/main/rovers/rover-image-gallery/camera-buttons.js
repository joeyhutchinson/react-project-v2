import React, {Component} from "react";

class CameraButtons extends Component {

  handleCameraChange = e => {
    this.props.handleCameraChange(e)
  }

  render() {
    if (this.props.isManifestLoading) {
      return null
    } else {
    console.log(this.props.isManifestLoading)
    console.log(this.props.imageManifestData[0].cameras)
    console.log(this.props.selectedSol)
    console.log(this.props.selectedCamera)

    if (this.props.isManifestLoading) {
      return null
    } else {
      let solIndex = this.props.selectedSol - 1
      let manifest = this.props.imageManifestData
      let cameraArray = manifest[solIndex].cameras
      return cameraArray.map((camera, i) => {
        return (
          <input type="radio" key={i} name={`camera-${camera}`} value={camera} checked={this.props.selectedCamera === camera } onChange={this.handleCameraChange}></input>
        )
      });
    }
  }
}
}
export default CameraButtons