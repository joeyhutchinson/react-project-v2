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
      src: "https://images-assets.nasa.gov/image/PIA14165/PIA14165~orig.jpg",
      altText: "",
      caption: ""
    },
    image2: {
      src: "https://images-assets.nasa.gov/image/PIA14165/PIA14165~orig.jpg",
      altText: "",
      caption: ""
    },
    image3: {
      src: "https://images-assets.nasa.gov/image/PIA14165/PIA14165~orig.jpg",
      altText: "",
      caption: ""
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
