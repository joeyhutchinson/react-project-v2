import React from "react";

const RoverDetailsTable = props => {
  const capitlisedFirstLetter = data => {
    // Function to capitalise first letter of returned text data
    let stringToChange = String(data);
    return stringToChange.charAt(0).toUpperCase() + stringToChange.slice(1);
  };

  // Create object to map over for the creation of the rover details table
  const details = [
    {
      detailName: "Launch Date",
      detailResult: props.readableDate(
        props.imageManifestData.launch_date,
        "long"
      )
    },
    {
      detailName: "Landing Date",
      detailResult: props.readableDate(
        props.imageManifestData.landing_date,
        "long"
      )
    },
    {
      detailName: "Rover Status",
      detailResult: capitlisedFirstLetter(props.imageManifestData.status)
    },
    {
      detailName: "No. Photos Taken",
      detailResult: String(props.imageManifestData.total_photos).replace(
        /(.)(?=(\d{3})+$)/g,
        "$1,"
      )
    }
  ];

  //  Text styling for rendered 'Loading...' text
  const loadingStyle = { color: "#3ba7ce" };

  // Render appropriate details table dependant on if API data loading. If loading, placeholder text is rendered.
  if (props.isManifestLoading) {
    return (
      <div className="dataDetails">
        <div className="dataTable">
          {details.map((detail, index) => {
            return (
              <li key={index}>
                <h3>{detail.detailName}</h3>
                <hr></hr>
                <p style={loadingStyle}>Loading...</p>
              </li>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dataTable">
        {details.map((detail, index) => {
          return (
            <li key={index}>
              <h3 key={index}>{detail.detailName}</h3>
              <hr></hr>
              <p>{detail.detailResult}</p>
            </li>
          );
        })}
      </div>
    );
  }
};

export default RoverDetailsTable;
