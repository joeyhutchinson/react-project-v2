import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./rover-components.css";


// imageManifestData={this.state.manifestData} imageGalleryData={this.state.imageData}

function RoverDetailsTable (props){
    

  let addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

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

  const lastDateAvail = props.imageManifestData.max_date;
  const maxSol = props.imageManifestData.max_sol;
   
  const details = [{detailName : "Launch Date", detailResult: readableDateLong(props.imageManifestData.launch_date)}, 
                  {detailName: "Landing Date", detailResult: readableDateLong(props.imageManifestData.landing_date)}, 
                  {detailName: "Rover Status", detailResult: props.imageManifestData.status}, 
                  {detailName: "No. Photos Taken", detailResult: props.imageManifestData.total_photos}];
                  console.log(details)
  const loadingStyle = {color: "#3ba7ce"};

  if (props.isLoading) {
  return (
    <div className="dataDetails">
      <div className="dataTable"> 
      {details.map((detail, index) => {
        return (<div><h3>{detail.detailName}</h3><hr></hr><p style={loadingStyle}>Loading...</p></div>)
      })}
      </div>
    </div>
  )
    } else {
      return (
          <div className="dataTable"> 
          {details.map((detail, index) => {
            return (<div><h3>{detail.detailName}</h3><hr></hr><p>{detail.detailResult}</p></div>)
          })}
          </div>
      )
    }
}


export default RoverDetailsTable;
