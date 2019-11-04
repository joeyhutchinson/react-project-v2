import React, {useState, useEffect} from 'react';
import CameraButtons from "../rover-image-gallery/camera-buttons"

// isManifestLoading={props.isManifestLoading} imageManifestData={props.manifestData} handleFormSubmit={handleFormSubmit} handleSolInput={handleSolInput} selectedSol={selectedSol}

const RoverGalleryForm = (props) =>  {
  const [solInput, setSolInput] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');

  // Handle submit - call function from gallery
  const handleFormSubmit = e => {
    e.preventDefault();
    props.handleFormSubmit(solInput, selectedCamera)
    setSolInput(0)
    let manifest = props.imageManifestData.photos
    setSelectedCamera(String(manifest[0].cameras[0]));
  }

  // Handle sol input - call function from gallery
  const handleSolInput = input => {
    setSolInput(input);
    console.log(`this is handleSolInput in form`, input)
  }

  // Handle camera select
  const handleCameraChange = e => {
    let cameraSelection = String(e.target.value)
    setSelectedCamera(cameraSelection)
  }

  useEffect(() => {
    let setInitialSelectedCamera = () => {
      let manifest = props.imageManifestData.photos
      setSelectedCamera(String(manifest[0].cameras[0]));
    }
    setInitialSelectedCamera();
  });

  if (props.isManifestLoading) {
    return null
  } else {
      return (
        <form id="gallery-form" className="rover-gallery-form" onSubmit={handleFormSubmit}>
          <div className="form-mision-day">
          Enter mission day (sol):
          <input type="text" name="sol-num" onChange={handleSolInput} value={solInput} size="8" required></input>
          </div>
          <div className="form-camera-select">
            <CameraButtons isManifestLoading={props.isManifestLoading} imageManifestData={props.imageManifestData.photos} handleCameraChange={handleCameraChange} selectedSol={props.selectedSol} selectedCamera={selectedCamera}/>
          </div>
          <div>
            <input type="submit" value="Generate gallery"></input>
            <input type="reset" value="Clear"></input>
          </div>
        </form>

    )
  }
}
export default RoverGalleryForm;

