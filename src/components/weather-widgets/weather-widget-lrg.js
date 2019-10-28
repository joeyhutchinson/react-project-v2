import React, { Component } from "react";
import WeatherItems from "./weather-items";

import dotenv from "dotenv";

import "./ww-lrg-styles.css";

dotenv.config();

class WeatherWidgetLrg extends Component {
  state = {
    isLoading: true,
    weatherData: [],
    currentSolData: [],
    currentSolNum: "",
    tempsAvail: false
  };



  // Fetch weather data via API call and set to component state
  // Alert if data is not available and doesn't load
  fetchData = () => {
    const url = `https://api.nasa.gov/insight_weather/?api_key=${
      process.env.REACT_APP_NASA_API_KEY
    }&feedtype=json&ver=1.0`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          const solsReturned = data.sol_keys;
          const currentSol = solsReturned[solsReturned.length - 1];
          const currentSolData = data[currentSol];
          const tempDataValid = data.validity_checks[currentSol].AT.valid;
          this.setState({
            isLoading: false,
            weatherData: data,
            currentSolData: currentSolData,
            currentSolNum: currentSol,
            tempsAvail: tempDataValid
          });
        },
        error => {
          if (error) {
            alert("The weather data is currently unavailable");
          }
        }
      );
  };
  componentDidMount() {
    // Make API call when component mounts
    this.fetchData();
    // Remake call every 5 minutes so data is updated in long sessions
    this.timer = setInterval(() => this.fetchData(), 300000);
  }

  componentWillUnmount() {
    // Cancel 5 minute API call when component unmounted
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    // Render "weather loading" text if API call is delayed or errors
    if (this.state.isLoading) {
      return (
        <div className="weather-widget-lrg">
          <div
            id="InSight-Weather-Report"
            className="section"
            style={{ minHeight: "59vh" }}
          >
            <div className="gradientOverlay" style={{ minHeight: "59vh" }}>
              <div id="InSight-Weather-Content" className="vCentered">
                <div id="InSight-Weather-Data" className="vAlignTop textWhite">
                  <h2 className="textWhite textAlignLeft">
                    Latest Weather at Elysium Planitia
                  </h2>
                  <p>
                    InSight is taking daily weather measurements (temperature,
                    wind, pressure) on the surface of Mars at Elysium Planitia,
                    a flat, smooth plain near Mars’ equator.
                  </p>
                  <p style={{ color: "tomato", fontSize: "1.2rem" }}>
                    Weather is currently loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    console.log(this.state.weatherData.validity_checks);
    // Below renders if no errors and api call is completed

    // Test if weather data is available and return temperature data for sol
    // Return placeholder text if not available
    // Each sol should have 7 temp items inc. "AT" temperature data
    // Compute Fahrenheit to celsius

    let temperatures = solData => {
      if (this.state.tempsAvail) {
        let maxFah = Math.round(solData.AT.mx);
        let minFah = Math.round(solData.AT.mn);
        return {
          maxF: maxFah,
          minF: minFah,
          maxC: Math.round((5 / 9) * (maxFah - 32)),
          minC: Math.round((5 / 9) * (minFah - 32))
        };
      } else {
        return { maxF: "--", minF: "--", maxC: "--", minC: "--" };
      }
    };

    // Convert UTC string to readable month and date format
    let readableDateLong = UTC => {
      let monthNum = new Date(UTC).getMonth();
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
      return `${months[monthNum]} ${new Date(UTC).getDate()}`;
    };

    return (
      <div className="weather-widget-lrg">
        <div id="InSight-Weather-Report" className="section">
          <div className="gradientOverlay">
            <div id="InSight-Weather-Content" className="vCentered">
              <div id="InSight-Weather-Data" className="vAlignTop textWhite">
                <h2 className="textWhite textAlignLeft">
                  Latest Weather at Elysium Planitia
                </h2>
                <p>
                  InSight is taking daily weather measurements (temperature,
                  wind, pressure) on the surface of Mars at Elysium Planitia, a
                  flat, smooth plain near Mars’ equator.
                </p>
                <div className="textLarger vCentered">
                  <div
                    id="InSight-tempDate"
                    className="vCenteredInner textAlignCenter"
                  >
                    <span className="marsDate nobr">
                      Sol {this.state.currentSolNum}
                    </span>
                    <span className="earthDate nobr">
                      {readableDateLong(this.state.currentSolData.First_UTC)}
                    </span>
                  </div>
                  <div className="temperatures main vCenteredInner fontBold textLarge">
                    <div className="highs nobr">
                      {/* High temps */}
                      <span className="text">High: </span>
                      <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}} >
                        {temperatures(this.state.currentSolData).maxF}&#176;
                      </span>
                      <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}} >
                        {temperatures(this.state.currentSolData).maxC}&#176;
                      </span>
                      <span className="degree">
                        <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}}>F</span>
                        <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}}>C</span>
                      </span>
                    </div>
                    <div className="lows nobr">
                      {/* Low temps */}
                      <span className="text">Low: </span>
                      <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}}>
                        {temperatures(this.state.currentSolData).minF}&#176;
                      </span>
                      <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}}>
                        {temperatures(this.state.currentSolData).minC}&#176;
                      </span>
                      <span className="degree">
                        <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}}>F</span>
                        <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}}>C</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Individual weather items boxes */}
            <div id="InSight-Forecast" className="textWhite">
              <WeatherItems weatherData={this.state.weatherData} tempType={this.props.tempType}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WeatherWidgetLrg;
