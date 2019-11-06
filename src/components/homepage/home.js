import React from "react";
import Slider from "./slider";
import ScrollToTopOnMountClass from "../scroll-to-top-class";


const Home = (props) => {
  return (
    <main>
      <ScrollToTopOnMountClass/>
      <Slider sliderImages={props.sliderImages}/>
      <div className="content">
        <p>
          Mars is one of the most explored bodies in our solar system, and it's
          the only planet where we've sent rovers to roam the alien landscape.
        </p>
        <p>
          NASA currently has three spacecraft in orbit, one rover and one lander
          on the surface and another rover under construction here on Earth.
          India and ESA also have spacecraft in orbit above Mars.
        </p>
      </div>
    </main>
  );
}
export default Home;
