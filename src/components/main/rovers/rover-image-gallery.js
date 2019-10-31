import React, { Component } from 'react';

import "./rover-components.css";

class RoverImageGallery extends Component {
  //   state = {
  //       // selectedDay: 1,
  //       // selectedCamera: []
  //   }
    

  // addDays = (date, days) => {
  //   let result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // }

  
    render () {
      // console.log(this.props.imageManifestData.max_sol)
      // const lastDateAvail = this.props.imageManifestData.max_date;
      // const maxSol = this.props.imageManifestData.max_sol;


      return (
          <div className="image-gallery-wrapper">
            <h2>Image Gallery</h2>
            {/* <div className="image-form">
              <form className="form" onSubmit={{}}>
              <div className="field">
                  <label className="label">Choose mission day:</label>
                </div>
                <div className="field">
                  <label className="label">Select camera</label>
                      <select
                        value={{}}
                        name="editor"
                        onChange={{}}
                      >
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>
                      </select>
                </div>
                <div className="field">
                      <input
                        type="submit"
                        value="Submit"
                        className="button is-primary"
                      />
                </div>
              </form>
            </div> */}
          <div className="image-gallery">
              <div className="thumbnails-section"></div>
              <div className="main-image-section"></div>
          </div>
        </div>
      )
    }
}

export default RoverImageGallery;
