import React from "react";
import TempToggle from "./temp-toggle";

import "./ww-sml-styles.css";

const WeatherWidgetSml = props => {
  // Below renders if no errors and api call is completed

  // Render "weather loading" text if API call is delayed or errors
  if (props.isDataLoading) {
    return (
      <div className="weather-widget-sml">
          <span className="ww-sml-heading">
              Latest Mars Weather
          </span>
          <p style={{ color: "tomato", fontSize: "1rem" }}>
              Weather is currently loading...
          </p>
      </div>
    )
  } else {
    // Test if weather data is available and return high temp data for latest sol
    // Return placeholder text if not available
    // Compute Fahrenheit to celsius
    let weatherData = solData => {
      if (props.allWeatherData.isWindAvail && props.allWeatherData.isTempsAvail) {
        let maxFah = Math.round(solData.AT.mx);
        let isWindy = (solData.HWS.av > 11) ? true : false;
        console.log(props.allWeatherData) 
        console.log(props.allWeatherData.currentSolData.First_UTC) 
        return ({
          maxF: maxFah,
          maxC: Math.round((5 / 9) * (maxFah - 32)),
          windy: isWindy
        })
      } else if (props.allWeatherData.isTempsAvail && !props.allWeatherData.isWindAvail) {
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
                    <img className="weather-icon sunny"src="http://worldweather.wmo.int/images/i25a.png" alt="" style={(weatherData(props.allWeatherData.currentSolData).windy) ? {display: "none"} : {}}/>
                    <img className="weather-icon windy"src="http://worldweather.wmo.int/images/i1.png" alt="" style={(weatherData(props.allWeatherData.currentSolData).windy) ? {} : {display: "none"}}/>
                    
                    <div className="ww-sml-weather">
                    {/* Weather description */}
                        <span className="weather-desc-sunny" style={(weatherData(props.allWeatherData.currentSolData).windy) ? {display: "none"} : {}}>Sunny
                        </span>
                        <span className="weather-desc-windy" style={(weatherData(props.allWeatherData.currentSolData).windy) ? {} : {display: "none"}}>Windy
                        </span>

                        {/* Weather Temp */}
                        <div className="weather-temp nobr">
                            <span className="text">High:&nbsp;</span>
                            <span className="fahrenheit" style={(props.tempType) ? {display: "none"} : {}} >
                                {weatherData(props.allWeatherData.currentSolData).maxF}&#176;
                            </span>
                            <span className="celsius" style={(props.tempType) ? {} : {display: "none"}} >
                                {weatherData(props.allWeatherData.currentSolData).maxC}&#176;
                            </span>
                            <span className="degree">
                                <span className="fahrenheit" style={(props.tempType) ? {display: "none"} : {}}>F</span>
                                <span className="celsius" style={(props.tempType) ? {} : {display: "none"}}>C</span>
                            </span>
                        </div>
                        {/* Weather date */}
                        <span className="earthDate nobr">
                            {/* {props.allWeatherData.currentSolData.Season} */}
                            {/* {weatherData(props.allWeatherData.currentSolData).date} */}
                        </span>
                    </div>
                    {/* Temperature Type Toggle i.e. Fahreinheit or celsius */}
                <TempToggle handleTempToggle={() => props.handleTempToggle()}/>
                </div>
              </div>
    );
  }
}

export default WeatherWidgetSml;
