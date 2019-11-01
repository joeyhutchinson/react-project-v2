import React from "react";
import ScrollToTopOnMountClass from "../scroll-to-top-class";

const Geology = (props) => {
  return (
    <main>
      <ScrollToTopOnMountClass/>
      <div className="content">
        <h1>Geology</h1>
        <h2>Global Properties of Mars</h2>
          <p>
          Mars has a diameter of 6790 kilometers, just over half the diameter of Earth, giving it a total surface area very nearly equal to the continental (land) area of our planet. Its overall density of 3.9 g/cm3 suggests a composition consisting primarily of silicates but with a small metal core. The planet has no global magnetic field, although there are areas of strong surface magnetization that indicate that there was a global field billions of years ago. Apparently, the red planet has no liquid material in its core today that would conduct electricity.
          </p>
          <img
            src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1095/2016/11/03155542/OSC_Astro_10_04_MarsMap.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="caption-text">
          False color elevation map of Mars. This image presents two hemispheres of Mars in the upper portion, and a color-based altitude scale at the bottom. The scale ranges from -8 k m, represented in dark blue on the left, gradually changing to green at -2 k m. Zero k m is represented in yellow, changing to red at 3 k m, then brown at 8 k m, and on to white at 12 k m on the right. The left hand image of Mars shows the highland region. The volcanoes are easily visible on the left. Valles Marineris is seen stretching from the center of the image toward the right. The right hand image shows the lower regions and plains with a large, deep basin at the lower left portion of the image. (Image: © NASA/JPL/University of Arizona)
          </div>
          <p>
          Approximately half the planet consists of heavily cratered highland terrain, found primarily in the southern hemisphere. The other half, which is mostly in the north, contains younger, lightly cratered volcanic plains at an average elevation about 5 kilometers lower than the highlands. Remember that we saw a similar pattern on Earth, the Moon, and Venus. A geological division into older highlands and younger lowland plains seems to be characteristic of all the terrestrial planets except Mercury.

Lying across the north-south division of Mars is an uplifted continent the size of North America. This is the 10-kilometer-high Tharsis bulge, a volcanic region crowned by four great volcanoes that rise still higher into the martian sky.
          </p>
          <img
            src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1095/2016/11/03155547/OSC_Astro_10_04_OlympusMon.jpg"
            alt=""
            style={{ width: "40%", float: "right", margin: "1rem 0 1rem 1rem" }}
          />
          <h2>Vocanoes</h2>
          <p>
          The lowland plains of Mars look very much like the lunar maria, and they have about the same density of impact craters. Like the lunar maria, they probably formed between 3 and 4 billion years ago. Apparently, Mars experienced extensive volcanic activity at about the same time the Moon did, producing similar basaltic lavas.
          </p>

          <p>
          The largest volcanic mountains of Mars are found in the Tharsis area (you can see them in Figure 5) although smaller volcanoes dot much of the surface. The most dramatic volcano on Mars is Olympus Mons (Mount Olympus), with a diameter larger than 500 kilometers and a summit that towers more than 20 kilometers above the surrounding plains—three times higher than the tallest mountain on Earth (Figure 6). The volume of this immense volcano is nearly 100 times greater than that of Mauna Loa in Hawaii. Placed on Earth’s surface, Olympus would more than cover the entire state of Missouri.
          </p>
          <h2>Cracks and Canyons</h2>
          <p>
          The Tharsis bulge has many interesting geological features in addition to its huge volcanoes. In this part of the planet, the surface itself has bulged upward, forced by great pressures from below, resulting in extensive tectonic cracking of the crust. Among the most spectacular tectonic features on Mars are the canyons called the Valles Marineris (or Mariner Valleys, named after Mariner 9, which first revealed them to us). They extend for about 5000 kilometers (nearly a quarter of the way around Mars) along the slopes of the Tharsis bulge. If it were on Earth, this canyon system would stretch all the way from Los Angeles to Washington, DC. The main canyon is about 7 kilometers deep and up to 100 kilometers wide, large enough for the Grand Canyon of the Colorado River to fit comfortably into one of its side canyons.
          </p>
          <img
            src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1095/2016/11/03155549/OSC_Astro_10_04_Canyonland.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="caption-text">
          Heavily Eroded Canyonlands on Mars. This image shows the Valles Marineris canyon complex, which is 3000 kilometers wide and 8 kilometers deep. (Image: © NASA/JPL/University of Arizona)
          </div>
      </div>
    </main>
  );
}
export default Geology;
