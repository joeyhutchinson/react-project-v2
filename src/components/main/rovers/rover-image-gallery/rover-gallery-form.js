import React, {useState} from 'react';
import SolDropDown from "../rover-image-gallery/sol-drop-down"
import CameraButtons from "../rover-image-gallery/camera-buttons"

const RoverGalleryForm = (props) =>  {

  const [solInput, setSolInput] = useState(props.selectedSol); // INITIAL STATE
  const [selectedCamera, setSelectedCamera] = useState('')
  const [solIndex, setSolIndex] = useState('0')

  // ---------- FORM FUNCTIONALITY

  // Handle submit - call function from gallery
  const handleFormSubmit = e  => {
    e.preventDefault();
    props.handleFormSubmit(solInput, selectedCamera)
  }

  // Handle sol input - call function from gallery
  const handleSolInput = e => {
    const input = e.target.value;
    setSolInput(input);
    let solData = props.solDataArray; 
    let solIndexNum = solData.indexOf(parseInt(input, 10));
    setSolIndex(solIndexNum);
  }

  // Handle camera select
  const handleCameraChange = camera => {
    let cameraSelection = String(camera);
    setSelectedCamera(cameraSelection);
  }

  if (props.isManifestLoading) {
    return null
  } else {
      // let placeholderText = `From ${} to ${}` 
      return (
        <form id="gallery-form" className="rover-gallery-form" onSubmit={handleFormSubmit}>
          <div className="form-mission-day">
          <label>Enter mission day (sol):</label>
            <select
              name="sol-num" 
              onChange={handleSolInput} 
              value={solInput} 
              required 
            >
              <SolDropDown 
                solDataArray={props.solDataArray}/>
            </select>
          </div>
          <div className="form-camera-select">
          <label>Select camera:</label>
          <div className="buttons-wrapper">
            <CameraButtons 
              isManifestLoading={props.isManifestLoading} 
              imageManifestData={props.imageManifestData.photos} 
              handleCameraChange={handleCameraChange} 
              solInput={solInput}
              solIndex={solIndex} 
              selectedCamera={selectedCamera}/>
          </div>
          </div>
          <div className="submit-button">
          <label>Generate image gallery</label>
            <input type="submit" value="Create"></input>
          </div>
        </form>

    )
  }
}
export default RoverGalleryForm;

