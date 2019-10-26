import React from "react";

function WeatherItems (props) {
  return (
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
  )
}

export default WeatherItems;