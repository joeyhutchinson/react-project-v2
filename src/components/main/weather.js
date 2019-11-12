import React from "react";
import WeatherWidgetLrg from "../weather-widgets/weather-widget-lrg";
import ScrollToTopOnMountClass from "../scroll-to-top-class";

const Weather = props => {
  return (
    <main>
      <div className="content">
        <ScrollToTopOnMountClass />
        <h1>Weather</h1>
        <WeatherWidgetLrg
          tempType={props.tempType}
          readableDate={props.readableDate}
        />
        <p>
          The above shows the per-Sol summary data for each of the last seven
          available Sols (Martian days). As more data from a particular Sol are
          downlinked from the spacecraft (sometimes several days later), these
          values are recalculated, and consequently may change as more data are
          received on Earth.
        </p>
        <h2>Temperature on Mars</h2>
        <p>
          Mars has an atmosphere that is 100 times thinner than the atmosphere
          of Earth. As a result, Mars' atmosphere cannot retain heat and the
          surface of Mars has an average temperature of{" "}
          <span style={props.tempType ? { display: "none" } : {}}>-81 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>-63 °C</span>.
          During winter, temperatures at the poles drop even further, reaching
          lows of{" "}
          <span style={props.tempType ? { display: "none" } : {}}>-195 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>-126 °C</span>
          . Near the equator of Mars, daytime temperatures during the summer can
          reach{" "}
          <span style={props.tempType ? { display: "none" } : {}}>70 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>21 °C</span>,
          but plummet to{" "}
          <span style={props.tempType ? { display: "none" } : {}}>-100 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>
            -73 °C
          </span>{" "}
          at night. Frost is common on rocks during nights, but it melts and
          evaporates as the air get warmer near dawn. Even when Mars experiences
          100% humidity, the conditions remain similar to those of the Atacama
          Desert in South America. Some forms of life, such as lichens, are
          known to survive this type of harsh climate by absorbing water from
          the humid environment, and researchers believe that a variety of
          Antarctic lichen that photosynthesizes at 70% humidity might be able
          to withstand the conditions on Mars.
        </p>

        <h2>Martian Seasons</h2>
        <p>
          Like Earth, Mars experiences four seasons, as both planets tilt on
          their axis at similar angles. However, seasons on Mars are much longer
          because of the planet's eccentric orbit. Spring lasts for seven
          months, both fall and summer last for six months, while winter is four
          months long. During the summer, the carbon dioxide ice caps in the
          polar regions shrink and disappear altogether, but redevelop during
          the winter. Researchers and astronomers believe that liquid water may
          be trapped beneath the carbon dioxide ice sheets.
        </p>

        <img
          alt=""
          src="https://i2.wp.com/wattsupwiththat.com/wp-content/uploads/2018/07/mars-dust-2018.png?fit=512%2C254&ssl=1"
          className="in-page-img"
        />

        <h2>Dust Storms</h2>
        <p>
          Dust storms are a common feature on the surface of Mars. In 2018,
          space satellites and telescopes recorded the largest dust storm ever
          observed on the surface of the Red Planet. In fact, the storm was so
          severe that it ended the mission of NASA's Mars rover, Opportunity.
        </p>
        <p>
          The thin atmosphere allows heat to penetrate to the surface of Mars,
          where it is absorbed by dust, resulting in a warm and circulating
          atmosphere. The storms puff up the surface and atmosphere, making it
          easier for water vapor and other gases to escape into space, which
          might explain how the planet lost its atmosphere and oceans.
        </p>

        <h2>Changing Climate</h2>
        <p>
          Some researchers suspect that Mars was wetter and warmer in the past,
          with an average temperature of about{" "}
          <span style={props.tempType ? { display: "none" } : {}}>50 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>10 °C</span>,
          while others think the planet may have been an icy world with
          temperatures as low as{" "}
          <span style={props.tempType ? { display: "none" } : {}}>-54 °F</span>
          <span style={props.tempType ? {} : { display: "none" }}>-45 °C</span>.
          Recent astronomical studies indicate that Mars might be emerging from
          an ice age. Shrinking ice caps and increased humidity at the polar
          regions suggest a rise in temperature, a feature that astronomers
          believe is the key to making the planet habitable for humans.
        </p>
      </div>
    </main>
  );
};
export default Weather;
