import React, { Component } from "react";

class WeatherItems extends Component {
  state = {
    weatherData: this.props.weatherData
  };

  render() {
    // Gather temperature data from weatherData and convert Fahrenheit to Celsius where necessary.
    // Return as object
    let temperatures = (solData, tempsValid) => {
      if (tempsValid) {
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

    // Map over weatherData and return each sol weather item with High and Low temps.
    const displayWeatherItems = () => {
      let solKeys = this.state.weatherData.sol_keys;

      return solKeys.map((sol, index) => {
        let solData = this.state.weatherData[sol];
        let tempsValid = this.state.weatherData.validity_checks[sol].AT.valid;
        return (
          <div className={`item sol${sol}`} key={index}>
            <span className="dateSol nobr">Sol {sol}</span>
            <span className="dateUTC nobr">
              {this.props.readableDate(solData.First_UTC, "short")}
            </span>
            <div className="fadeWhiteLine" />
            <div
              className="fahrenheit"
              style={this.props.tempType ? { display: "none" } : {}}
            >
              <span className="high">
                High: {temperatures(solData, tempsValid).maxF}&#8457;
                <br />
              </span>
              <span className="low">
                Low: {temperatures(solData, tempsValid).minF}&#8457;
              </span>
            </div>
            <div
              className="celsius"
              style={this.props.tempType ? {} : { display: "none" }}
            >
              <span className="high">
                High: {temperatures(solData, tempsValid).maxC}&#8451;
                <br />
              </span>
              <span className="low">
                Low: {temperatures(solData, tempsValid).minC}&#8451;
              </span>
            </div>
          </div>
        );
      });
    };

    return <>{displayWeatherItems()}</>;
  }
}
export default WeatherItems;
