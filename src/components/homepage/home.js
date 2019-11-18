import React, {useReducer} from "react";
import Slider from "./slider";
import ScrollToTopOnMountClass from "../scroll-to-top-class";


const Home = (props) => {

  const [sliderIndex, setSliderIndex] = useReducer((index, action) => {
    switch (action.type) {
      case "leftClick":
        return (index = (action.value === 0) ? action.value + 4 : action.value - 1 );
      case "rightClick":
        return (index = (action.value === 4) ? action.value - 4 : action.value + 1);
      case "dot1":
        return (index = action.value);
      case "dot2":
        return (index = action.value);
      case "dot3":
        return (index = action.value);
      case "dot4":
        return (index = action.value);
      case "dot5":
        return (index = action.value);
      default:
        return 0;
    }
  }, 0);

  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="carousel">
        <Slider 
          sliderImages={props.sliderImages}
          sliderIndex={sliderIndex}
          />
        <button className="slider-left-arrow" onClick={() => setSliderIndex({ type: "leftClick", value: sliderIndex })}>&#10094;</button>
        <button className="slider-right-arrow" onClick={() => setSliderIndex({ type: "rightClick", value: sliderIndex })}>&#10095;</button>
        {/* Slider dots */}
        <div style={{textAlign:"center"}}>
          <span className="dot1" onClick={() => setSliderIndex({ type: "dot1", value: 0 })} style={(sliderIndex === 0) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot2" onClick={() => setSliderIndex({ type: "dot2", value: 1 })} style={(sliderIndex === 1) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot3" onClick={() => setSliderIndex({ type: "dot3", value: 2 })} style={(sliderIndex === 2) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot4" onClick={() => setSliderIndex({ type: "dot4", value: 3 })} style={(sliderIndex === 3) ? {backgroundColor: "#333"} : {}}></span>
          <span className="dot5" onClick={() => setSliderIndex({ type: "dot5", value: 4 })} style={(sliderIndex === 4) ? {backgroundColor: "#333"} : {}}></span>
        </div>
      </div>
    </main>
  );
}
export default Home;
