import React, { Component } from "react";
import dotenv from "dotenv";
import TempToggle from "./temp-toggle";

import "./ww-sml-styles.css";

dotenv.config();

class WeatherWidgetSml extends Component {
  state = {
    isLoading: true,
    weatherData: [],
    currentSolData: [],
    currentSolNum: "",
    tempsAvail: false,
    windAvail: false
  };



  // Fetch weather data via API call and set to component state
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
          const windDataValid = data.validity_checks[currentSol].HWS.valid;
          this.setState({
            isLoading: false,
            weatherData: data,
            currentSolData: currentSolData,
            currentSolNum: currentSol,
            tempsAvail: tempDataValid,
            windAvail: windDataValid
          });
        },
        error => {
          if (error) {
            console.log("The latest weather data is currently unavailable");
          }
        }
      );
  };
  componentDidMount() {
    // Make API call when component mounts
    this.fetchData();
  }

  render() {
    // Render "weather loading" text if API call is delayed or errors
    if (this.state.isLoading) {
      return (
        <div className="weather-widget-sml">
            <span className="ww-sml-heading">
                Latest Mars Weather
            </span>
            <p style={{ color: "tomato", fontSize: "1rem" }}>
                Weather is currently loading...
            </p>
        </div>
      );
    }
    // Below renders if no errors and api call is completed

    // Test if weather data is available and return high temp data for latest sol
    // Return placeholder text if not available
    // Compute Fahrenheit to celsius

    let weatherData = solData => {
      if (this.state.windAvail && this.state.tempsAvail) {
        let maxFah = Math.round(solData.AT.mx);
        let isWindy = (solData.HWS.av > 11) ? true : false;
        return ({
          maxF: maxFah,
          maxC: Math.round((5 / 9) * (maxFah - 32)),
          windy: isWindy
        })
      } else if (this.state.tempsAvail && !this.state.windAvail) {
        let maxFah = Math.round(solData.AT.mx);
        return ({
          maxF: maxFah,
          maxC: Math.round((5 / 9) * (maxFah - 32)),
          windy: false
        })
      } else {
          return ({
            maxF: "--",
            maxC: "--",
            windy: false
          })
      }
    };
    

    return (
      <div className="weather-widget-sml">
                <h2 className="ww-sml-heading">
                  Latest Mars Weather
                </h2>
                
                <div className="ww-sml-inner">

                    {/* Weather icons */}
                    <img className="weather-icon sunny"src="http://worldweather.wmo.int/images/i25a.png" alt="" style={(weatherData(this.state.currentSolData).windy) ? {display: "none"} : {}}/>
                    <img className="weather-icon windy"src="http://worldweather.wmo.int/images/i1.png" alt="" style={(weatherData(this.state.currentSolData).windy) ? {} : {display: "none"}}/>
                    
                    <div className="ww-sml-weather">
                    {/* Weather description */}
                        <span className="weather-desc-sunny" style={(weatherData(this.state.currentSolData).windy) ? {display: "none"} : {}}>Sunny
                        </span>
                        <span className="weather-desc-windy" style={(weatherData(this.state.currentSolData).windy) ? {} : {display: "none"}}>Windy
                        </span>

                        {/* Weather Temp */}
                        <div className="weather-temp nobr">
                            <span className="text">High:&nbsp;</span>
                            <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}} >
                                {weatherData(this.state.currentSolData).maxF}&#176;
                            </span>
                            <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}} >
                                {weatherData(this.state.currentSolData).maxC}&#176;
                            </span>
                            <span className="degree">
                                <span className="fahrenheit" style={(this.props.tempType) ? {display: "none"} : {}}>F</span>
                                <span className="celsius" style={(this.props.tempType) ? {} : {display: "none"}}>C</span>
                            </span>
                        </div>
                        {/* Weather date */}
                        <span className="earthDate nobr">
                            {this.props.readableDate(this.state.currentSolData.First_UTC, 'long')}
                        </span>
                    </div>
                    {/* Temperature Type Toggle i.e. Fahreinheit or celsius */}
                <TempToggle handleTempToggle={this.props.handleTempToggle}/>
                </div>
             </div>
    );
  }
}
export default WeatherWidgetSml;