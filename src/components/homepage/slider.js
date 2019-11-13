import React from "react";
import { Link } from "react-router-dom";

import "./slider.css";

const Slider = (props) => {

  return props.sliderImages.map((item, i) => {
    return (
      <>
          <div 
            className={`carousel-item fade ${( i === props.sliderIndex ) ? `active-slide` : ``}`}
            key={`carousel-${i}`} 
            style={{backgroundImage: `url(${item.src})`}}
            >
          </div>
          <div className={`carousel-descr ${( i === props.sliderIndex ) ? `active-slide` : ``}`}>
          <span className="carousel-header">{item.image}</span><br/> 
          <span className="carousel-caption">{item.caption}</span><br/>
          <Link
            to={item.link}
            className="inpage-link"
          >
            <button className="page-link">{item.buttonText} &#10095;</button>
          </Link>
        </div>
        </>
    )
  });
}
export default Slider;