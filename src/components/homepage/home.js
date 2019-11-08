import React, {useState} from "react";
import Slider from "./slider";
import ScrollToTopOnMountClass from "../scroll-to-top-class";


const Home = (props) => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const leftClick = () => {
    setSliderIndex(prevState => (prevState === 0) ? prevState + 4 : prevState - 1 );
  }

  const rightClick = () => {
    setSliderIndex(prevState => (prevState === 4) ? prevState - 4 : prevState + 1);
  }

  const dotSelect = (e) => {
    let index = e.target.title;
    setSliderIndex(index)
    console.log(index)
  }

  // setTimeout(() => {
  //   if (sliderIndex === 4) {
  //     setSliderIndex(0)
  //   } else {
  //     setSliderIndex(prevState => prevState + 1)
  //   }
  // }, 10000);

  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="carousel">
        <Slider 
          sliderImages={props.sliderImages}
          sliderIndex={sliderIndex}/>
        <button className="slider-left-arrow" onClick={leftClick} /*disabled={sliderIndex === 0}*/>&#10094;</button>
        <button className="slider-right-arrow" onClick={rightClick} /*disabled={sliderIndex === 4}*/>&#10095;</button>
        {/* Slider dots */}
        <div style={{textAlign:"center"}}>
          <span className="dot1" title="0" onClick={dotSelect} style={(sliderIndex === 0) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot2" title="1"onClick={dotSelect} style={(sliderIndex === 1) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot3" title="2" onClick={dotSelect} style={(sliderIndex === 2) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot4" title="3" onClick={dotSelect} style={(sliderIndex === 3) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot5" title="3" onClick={dotSelect} style={(sliderIndex === 4) ? {backgroundColor: "#333"} : {}}></span>
        </div>
      </div>
    </main>
  );
}
export default Home;
