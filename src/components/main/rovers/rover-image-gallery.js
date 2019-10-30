import React, { Component } from 'react';

import "./rover-image-gallery.css";
import "react-datepicker/dist/react-datepicker.css";

// imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData}

class RoverImageGallery extends Component {
    state = {
        // selectedDay: 1,
        // selectedCamera: []
    }
    

  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  
    render () {
      console.log(this.props.imageManifestData.max_sol)
      // const lastDateAvail = this.props.imageManifestData.max_date;
      // const maxSol = this.props.imageManifestData.max_sol;

      let readableDateLong = date => {
        let monthNum = new Date(date).getMonth();
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        return ` ${new Date(date).getDate()} ${months[monthNum]} ${new Date(date).getFullYear()} `;
      };

      return (
          <>
          <h2>Image Gallery</h2>
          <div className="image-form">
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
           </div>
          <div className="image-gallery">
              <div className="thumbnails-section"></div>
              <div className="main-image-section"></div>
          </div>
          </>
      )
    }
}

export default RoverImageGallery;
