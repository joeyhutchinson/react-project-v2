import React, { Component } from "react";

class Deimos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <main>
        <div className="content">
          <h1>Deimos</h1>
          <p>
            The Martian moon Phobos orbits only a few thousand miles above the Red
            Planet's surface. Its proximity to its planet is one of the reasons
            astronomers were unable to see the satellite until the late 19th
            century. In fact, the moon is getting closer to Mars over the
            centuries, and eventually will either break up or be pulled into the
            Martian surface.
          </p>
          <p>
            From the surface of Mars, the tiny moon appears star-like. At full
            moon, Deimos shines about as brightly as Venus. When the moon eclipses
            the sun, it appears as a small dot crossing its surface.
          </p>
          <img
            src="https://cdn.mos.cms.futurecdn.net/ESAC5koFqwiuzTVXwkY9DT-650-80.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="caption-text">
            Images captured by NASA's Mars Reconnaissance Orbiter, reveal that the
            surface of Deimos is mostly smoooth, marred only by recent impact
            craters.(Image: © NASA/JPL/University of Arizona)
          </div>
        </div>
      </main>
    );
  }
}
export default Deimos;
