import React, {Component} from "react";

class WeatherItems extends Component {
  state = {
    weatherData : this.props.weatherData
  }

  render() {
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

    const readableDateShort = UTC => {
      let monthNum = new Date(UTC).getMonth();
      let months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dec."
      ];
      return `${months[monthNum]} ${new Date(UTC).getDate()}`;
    };


    const displayWeatherItems = () => {
      let solKeys = this.state.weatherData.sol_keys;

      return solKeys.map((sol, index) => {
        let solData = this.state.weatherData[sol];
        let tempsValid = this.state.weatherData.validity_checks[sol].AT.valid;
        return (
          <div className={`item sol${sol}`} key={index}>
            <span className="dateSol nobr">Sol {sol}</span>
            <span className="dateUTC nobr">{readableDateShort(solData.First_UTC)}</span>
            <div className="fadeWhiteLine" />
            <div className="fahrenheit" style={{}}>
              <span className="high">
                High: {temperatures(solData, tempsValid).maxF}&#8457;
                <br />
              </span>
              <span className="low">Low: {temperatures(solData, tempsValid).minF}&#8457;</span>
            </div>
            <div className="celsius" style={{}}>
              <span className="high">
                High: {temperatures(solData, tempsValid).maxC}&#8451;
                <br />
              </span>
              <span className="low">Low: {temperatures(solData, tempsValid).minC}&#8451;</span>
            </div>
          </div>
        )
      })
    }
    
      return (
        <>
                    {displayWeatherItems()}
        </>       
      )
  }
  }
export default WeatherItems;