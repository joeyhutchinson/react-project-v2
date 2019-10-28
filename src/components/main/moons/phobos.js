import React, { Component } from "react";

class Phobos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <main>
        <div className="content">
          <h1>Phobos</h1>
          <p>
            Mars is the only terrestrial planet to host multiple moons. The
            smaller of the two, the lumpy moon Deimos, bears more resemblance to
            an asteroid than to most of the moons in the solar system, a
            similarity that raises questions about its formation.
          </p>
          <img
            src="https://solarsystem.nasa.gov/system/stellar_items/image_files/7_feature_1600x900_phobos.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="caption-text">
            NASA's Mars Reconnaissance Orbiter took this image of the larger of
            Mars' two moons, Phobos, from a distance of about 6,800 kilometers
            (about 4,200 miles). (Image: © NASA/JPL/University of Arizona)
          </div>
        </div>
      </main>
    );
  }
}
export default Phobos;
