# Project Overview
## Project Links
[GitHub Repository](https://github.com/joeyhutchinson/react-project-v2)<br/>
[CodeSandbox Sandbox](https://codesandbox.io/s/react-project-v2-08mev)<br/>

## Description

This project will utilise the open sourse data available from NASA, and create a one stop shop for all things planet Mars. It will be a multi page website, and will include searchable images taken by past and current rovers, weather data which is updated regularily from the API data, and - if all goes to plan - will also include an interactive embedded Google Mars map. </br>

## Wireframes

[Wireframe 1](https://photos.google.com/share/AF1QipMwMH7_znQlQ6FihfwVoP3q7yiKVvB8rx86eK0r5B7xNnE1O0N2Gc8Q3nbpsMsDqA?key=RERmXzlZWkRvNmV2Q2JSZkZJbUdyWDllVWhGQ2tR)</br>
(Homepage set-up and brief overview and layout of website.)</br>

## API Info

**NASA Open API details:** [NASA API](https://api.nasa.gov/)<br/>
- InSight Mars Weather Service API<br/>
NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data are received on Earth. This API is maintained and provided by NASA Jet Propulsion Laboratory and Cornell University.<br/>
- Mars Rover Photos API<br/>
This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too. Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.<br/>

**Google Maps (Mars) API details:** [Google Maps API]()<br/>

## MVP/ Post MVP

#### MVP

#### Post MVP

## React Component Hierarchy

[Hierarchy Draft 1](https://photos.google.com/share/AF1QipOYuBPHb3RH9W9jBdtETHhBwoj3yavbeIQqGHrpgEPBs6_tfuG_WMjnFVA6D6SRPg?key=ZXlLZEJlakpOMDAzWC1hUFpVZFpfWDNrZFE1eEtB)<br />

## Est. Time

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| :-------- | :------: | :------------: | :-----------: | :---------: |
| Planning  |   High   |    6 Hours     |    7 Hours    |
| Planning  |          |                |               |
| Planning  |          |                |               |
| Total:    |   ----   |    6~ Hours    |    7 Hours    |

## Code Snippet

## Errors & Resolutions

ERROR: External error with NASA API data - InSight lander did not return temperature data for sol 322. Temperature data therefore unavailable for Weather component.<br/>
SOLUTION: Designed function to test for valid data and then returned placeholder text if temp data not available. (components/weather-widgets/weather-widget-lrg.js)
