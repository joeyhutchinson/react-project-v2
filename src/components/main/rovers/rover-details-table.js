import React, { Component } from 'react';

import "./rover-image-gallery.css";
import "react-datepicker/dist/react-datepicker.css";

// imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData}

class RoverDetailsTable extends Component {
    

  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  
    render () {
      console.log(this.props.imageManifestData.max_sol)
      const lastDateAvail = this.props.imageManifestData.max_date;
      const maxSol = this.props.imageManifestData.max_sol;

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
        
          <div className="dataDetails">
            <div className="dataTable">
              <div><h3>Launch Date</h3><hr></hr><p>{readableDateLong(this.props.imageManifestData.launch_date)}</p></div>
              <div><h3>Landing Date</h3><hr></hr><p>{readableDateLong(this.props.imageManifestData.landing_date)}</p></div>
              <div><h3>Rover Status</h3><hr></hr><p>{this.props.imageManifestData.status}</p></div>
              <div><h3>No. Photos Taken</h3><hr></hr><p>{this.props.imageManifestData.total_photos}</p></div>
            </div>
          </div>
        
      )
    }
}

export default RoverDetailsTable;
