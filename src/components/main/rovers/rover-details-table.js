import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./rover-components.css";

function RoverDetailsTable (props){

   
  const details = [{detailName : "Launch Date", detailResult: props.readableDate(props.imageManifestData.launch_date, "long")}, 
                  {detailName: "Landing Date", detailResult: props.readableDate(props.imageManifestData.landing_date, "long")}, 
                  {detailName: "Rover Status", detailResult: props.imageManifestData.status}, 
                  {detailName: "No. Photos Taken", detailResult: String(props.imageManifestData.total_photos).replace(/(.)(?=(\d{3})+$)/g,'$1,')}];
  const loadingStyle = {color: "#3ba7ce"};

  if (props.isLoading) {
  return (
    <div className="dataDetails">
      <div className="dataTable"> 
      {details.map((detail, index) => {
        return (<li key={index}><h3>{detail.detailName}</h3><hr></hr><p style={loadingStyle}>Loading...</p></li>)
      })}
      </div>
    </div>
  )
    } else {
      return (
          <div className="dataTable"> 
          {details.map((detail, index) => {
            return (<li key={index}><h3 key={index}>{detail.detailName}</h3><hr></hr><p>{detail.detailResult}</p></li>)
          })}
          </div>
      )
    }
}


export default RoverDetailsTable;
