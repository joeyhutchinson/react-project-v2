import React, { Component } from "react";
import { Link } from "react-router-dom";

import data from "../../data"

import "./slider.css";

class Slider extends Component {


  render() {
    let imageDetails = this.props.sliderImages;
    
    return (
      <div className="carousel">
        <div className="carousel-item" style={{backgroundImage: `url(${imageDetails.image1.src})`}}>
          <div><span>{imageDetails.image1.caption}</span>
          <Link
              to={imageDetails.image1.link}
              className="inpage-link"
              activeStyle={{
                backgroundColor: "#bd632f",
                color: "white",
                textDecoration: "none"
              }}
            >
              <button>{imageDetails.image1.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;