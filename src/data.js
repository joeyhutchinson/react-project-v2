import dotenv from "dotenv";

dotenv.config();

const data = {
  api_keys: {
    nasa: process.env.REACT_APP_NASA_API_KEY,
    api_key_2: process.env.REACT_APP_API_KEY,
    api_key_3: process.env.REACT_APP_API_KEY
  },
  slider_images: {
    image1: {
      src: "https://media.wired.com/photos/59272b287034dc5f91bedcdd/master/pass/PIA11777.jpg",
      altText: "",
      link: "/geology",
      caption: "The rusty world is full of mysteries—and some of the solar system's most extreme geology.",
      buttonText: "Lear more about Mars' geology"
    },
    image2: {
      src: "https://images-assets.nasa.gov/image/PIA17305/PIA17305~orig.jpg",
      altText: "",
      link: "/moons/phobos",
      caption: "Mars is kept company by two cratered moons -- an inner moon named Phobos and an outer moon named Deimos",
      buttonText: "Explore Mar's pottato moon - Phobos"
    },
    image3: {
      src: "https://images-assets.nasa.gov/image/PIA03800/PIA03800~orig.jpg",
      altText: "",
      link: "/map",
      caption: " The Context Camera (CTX) on NASA's Mars Reconnaissance Orbiter (MRO) has been taking images of Mars for more than 10 years, sharp enough to show the shapes of features as small as a tennis court.",
      buttonText: "Explore the Martian surface"
    }
  },
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
