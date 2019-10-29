import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
import dotenv from "dotenv";

import "./rover-image-gallery.css";
import "react-datepicker/dist/react-datepicker.css";

dotenv.config();

class RoverImageGallery extends Component {
    state = {
        rover: this.props.rover,
        isLoading: true,
        manifestData: [],
        imageData: [],
        selectedFromDate: 1000,
        selectedToDate: "",
        selectedCamera: "fhaz"
    }
    //   Fetch manifest data via API call and set to component state
    //   Alert if data is not available and doesn't load
    fetchManifestData = () => {
        const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${
            this.state.rover}/?api_key=${
                process.env.REACT_APP_NASA_API_KEY}`;
        fetch(url)
          .then(response => response.json())
          .then(
            data => {
              this.setState({
                isLoading: true,
                manifestData: data.photo_manifest
              });
            },
            error => {
              if (error) {
                alert("Image gallery is currently unavailable");
              }
            }
          );
      };

//   Fetch image data via API call and set to component state
//   Alert if data is not available and doesn't load
  fetchImageData = () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
        this.state.rover}/photos?sol=1000&api_key=${
      process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            isLoading: true,
            imageData: data
          });
        },
        error => {
          if (error) {
            alert("Image gallery is currently unavailable");
          }
        }
      );
  };

  componentDidMount() {
    // Make API call when component mounts
    this.fetchManifestData();
    this.fetchImageData();
  }

  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
    render () {
      console.log(this.state.manifestData.max_sol)

      const landingDate = this.state.manifestData.landing_date;
      const lastDateAvail = this.state.manifestData.max_date;
      const maxSol = this.state.manifestData.max_sol;  

      return (
          <>
          <div className="dataDetails">
            <table>
              <thead>
                <tr>
                  <th>Launch Date</th>
                  <th>Landing Date</th>
                  <th>Rover Status</th>
                  <th>No.Photos Taken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.manifestData.launch_date}</td>
                  <td>{this.state.manifestData.landing_date}</td>
                  <td>{this.state.manifestData.status}</td>
                  <td>{this.state.manifestData.total_photos}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="image-form">
            <form className="form" onSubmit={{}}>
            <div className="field">
                <label className="label">From date</label>
                <DatePicker
                    selected={this.state.selectedFromDate}
                    onChange={{}}
                    minDate={this.state.manifestData.landing_date}
                    maxDate={this.addDays(this.state.manifestData.landing_date, this.state.manifestData.max_sol)}
                    placeholderText="Select date"
                  />
              </div>
              <div className="field">
                <label className="label">To date</label>
                <DatePicker
                    selected={this.state.selectedFromDate}
                    onChange={{}}
                    minDate={this.state.manifestData.landing_date}
                    maxDate={this.addDays(this.state.manifestData.landing_date, this.state.manifestData.max_sol)}
                    placeholderText="Select date"
                  />
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
            </form> */}
          {/* </div> */}
          <div className="image-gallery">
              <div className="thumbnails-section"></div>
              <div className="main-image-section"></div>
          </div>
          </>
      )
    }
}

export default RoverImageGallery;
