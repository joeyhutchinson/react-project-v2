# Project Overview

## Description

This project will utilise the open sourse data available from NASA, and create a one stop shop for all things planet Mars. It will be a multi page website, and will include searchable images taken by past and current rovers, passt and current weather data updated daily and will also include an interactive embedded Google Mars map. </br>

## Wireframes

[Wireframe 1](https://photos.google.com/share/AF1QipMwMH7_znQlQ6FihfwVoP3q7yiKVvB8rx86eK0r5B7xNnE1O0N2Gc8Q3nbpsMsDqA?key=RERmXzlZWkRvNmV2Q2JSZkZJbUdyWDllVWhGQ2tR)</br>
(Homepage set-up and brief overview and layout of website.)</br>

## API Info

NASA API detsails: <br/>
[NASA API](https://api.nasa.gov/)<br/>
Google Maps (Mars) API details: <br/>
[Google Maps API]()

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
SOLUTION: Designed function to test for correct data length and then returned placeholder text if temp data not available. (components/weather-widgets/weather-widget-lrg.js)
