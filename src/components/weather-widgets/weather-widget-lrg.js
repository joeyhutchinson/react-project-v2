import React, { Component } from "react";
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
                      <span className="fahrenheit" style={{}}>
                        {temperatures(this.state.currentSolData).maxF}&#176;
                      </span>
                      <span className="celsius" style={{}}>
                        {temperatures(this.state.currentSolData).maxC}&#176;
                      </span>
                      <span className="degree">
                        <span className="lbl_fahrenheit">F</span>
                        <span className="slash"> | </span>
                        <span className="lbl_celsius fadeWhite">C</span>
                      </span>
                    </div>
                    <div className="lows nobr">
                      {/* Low temps */}
                      <span className="text">Low: </span>
                      <span className="fahrenheit">
                        {temperatures(this.state.currentSolData).minF}&#176;
                      </span>
                      <span className="celsius" style={{}}>
                        {temperatures(this.state.currentSolData).minC}&#176;
                      </span>
                      <span className="degree">
                        <span className="lbl_fahrenheit">F</span>
                        <span className="slash"> | </span>
                        <span className="lbl_celsius fadeWhite">C</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="InSight-Forecast" className="textWhite">
              <div className="item">
                <span className="dateSol nobr">Sol 315</span>
                <span className="dateUTC nobr">Oct. 15</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -12&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -151&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -24&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -102&#8451;</span>
                </div>
              </div>
              <div className="item">
                <span className="dateSol">Sol 316</span>
                <span className="dateUTC">Oct. 16</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -14&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -151&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -26&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -102&#8451;</span>
                </div>
              </div>
              <div className="item">
                <span className="dateSol">Sol 318</span>
                <span className="dateUTC">Oct. 18</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -12&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -153&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -25&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -103&#8451;</span>
                </div>
              </div>
              <div className="item">
                <span className="dateSol">Sol 319</span>
                <span className="dateUTC">Oct. 19</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -14&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -151&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -25&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -101&#8451;</span>
                </div>
              </div>
              <div className="item">
                <span className="dateSol">Sol 320</span>
                <span className="dateUTC">Oct. 21</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -14&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -152&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -26&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -102&#8451;</span>
                </div>
              </div>
              <div className="item">
                <span className="dateSol">Sol 321</span>
                <span className="dateUTC">Oct. 22</span>
                <div className="fadeWhiteLine" />
                <div className="fahrenheit">
                  <span className="high">
                    High: -12&#8457;
                    <br />
                  </span>
                  <span className="low">Low: -153&#8457;</span>
                </div>
                <div className="celsius" style={{}}>
                  <span className="high">
                    High: -25&#8451;
                    <br />
                  </span>
                  <span className="low">Low: -103&#8451;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WeatherWidgetLrg;
