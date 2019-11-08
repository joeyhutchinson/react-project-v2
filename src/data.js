import dotenv from "dotenv";

dotenv.config();

const data = {
  api_keys: {
    nasa: process.env.REACT_APP_NASA_API_KEY,
    api_key_2: process.env.REACT_APP_API_KEY,
    api_key_3: process.env.REACT_APP_API_KEY
  },
  slider_images: [
    { image: "Extreme geology",
      src: "https://media.wired.com/photos/59272b287034dc5f91bedcdd/master/pass/PIA11777.jpg",
      altText: "",
      link: "/geology",
      caption: "The rusty world is full of mysteries—and some of the solar system's most extreme geology.",
      buttonText: "Learn more about Mars' geology"
    },
    { image: "Dust, dust and more dust!" ,
      src: "https://image.businessinsider.com/5b281b171ae6624e008b5326?width=1100&format=jpeg&auto=webp",
      altText: "",
      link: "/weather",
      caption: "Martian dust storms are common, especially during southern hemisphere spring and summer, when the planet is closest to the Sun.",
      buttonText: "Get the latest weather report"
    },
    { image: "Potato moon",
      src: "https://images-assets.nasa.gov/image/PIA17305/PIA17305~orig.jpg",
      altText: "",
      link: "/moons/phobos",
      caption: "Mars is kept company by two cratered moons -- an inner moon named Phobos and an outer moon named Deimos",
      buttonText: "Explore Mar's potato moon - Phobos"
    },
    { image: "Roving the lanscape",
      src: "https://fsmedia.imgix.net/df/ab/7a/9f/e66e/41ab/91e5/7850b253d092/a-selfie-take-by-nasas-curiosity-rover.jpeg?rect=0%2C215%2C1584%2C792&auto=format%2Ccompress&dpr=2&w=650",
      altText: "",
      link: "/rovers/curiosity",
      caption: "Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars.",
      buttonText: "Get to know this roving Earth ambassador"
    },
    { image: "Navigate Mars" ,
      src: "https://images-assets.nasa.gov/image/PIA03800/PIA03800~orig.jpg",
      altText: "",
      link: "/map",
      caption: "The Context Camera (CTX) on NASA's Mars Reconnaissance Orbiter (MRO) has been taking images of Mars for more than 10 years, sharp enough to show the shapes of features as small as a tennis court.",
      buttonText: "Investigate the Martian surface"
    }
  ],
  links: [
    { route: "/", name: "Home", sublinks: false },
    { route: "/geology", name: "Geology", sublinks: false },
    { route: "/weather", name: "Weather", sublinks: false },
    {
      route: "/moons",
      name: "Moons",
      sublinks: [
        { route: "/moons/phobos", name: "Phobos" },
        { route: "/moons/deimos", name: "Deimos" }
      ]
    },
    {
      route: "/rovers",
      name: "Rovers",
      sublinks: [
        { route: "/rovers/curiosity", name: "Curiosity" },
        { route: "/rovers/opportunity", name: "Opportunity" },
        { route: "/rovers/spirit", name: "Spirit" }
      ]
    },
    { route: "/map", name: "Map", sublinks: false }
  ]
};

export default data;
