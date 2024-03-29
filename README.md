# Project Overview

## Project Links

- [GitHub Repository](https://github.com/joeyhutchinson/react-project-v2)<br/>
- [CodeSandbox Sandbox](https://codesandbox.io/s/github/joeyhutchinson/react-project-v2)<br/>
- [Hosted Location](https://nervous-brown-96f8ae.netlify.com/)<br/>

## Description

This project will utilise the open sourse data available from NASA, and create a one stop shop for all things planet Mars. It will be a multi page website, and will include searchable images taken by past and current rovers, weather data which is updated regularily from the API data, and - if all goes to plan - will also include an interactive embedded Google Mars map. <br/>

## Wireframes
**Homepage**<br/>
[Wireframe 1 - Homepage](https://photos.google.com/share/AF1QipMwMH7_znQlQ6FihfwVoP3q7yiKVvB8rx86eK0r5B7xNnE1O0N2Gc8Q3nbpsMsDqA?key=RERmXzlZWkRvNmV2Q2JSZkZJbUdyWDllVWhGQ2tR)<br/>
(Homepage set-up and brief overview and layout of website.)<br/><br/>
**Weather widget - large**<br/>
[Wireframe 2 - Large weather widget](https://photos.app.goo.gl/fjddEykfgrUSte257)<br/>
(Large dynamic weather widget set-up on /weather page.)<br/>
[NASA original weather widget](https://mars.nasa.gov/insight/weather/)<br/>
(NASA's version of the weather widget in which I am trying to replicate.)<br/><br/>
**Weather widget - small**<br/>
[Wireframe 3 - Small weather widget](https://photos.app.goo.gl/KwRZbjRRBizgCTLT9)<br/>
(Small dynamic weather widget set-up in header.)<br/>
[Beaufort Scale info](https://en.wikipedia.org/wiki/Beaufort_scale)<br/>
(Scale used to determine what would be classed as "windy weather".)<br/><br/>
**Image Gallery**<br/>
[Wireframe 4 - Image Gallery - [Page1](https://photos.google.com/photo/AF1QipOrqghVA5iReWWFsRYlGjvOTNBMvy0JDf8CvUgh) [Page2](https://photos.google.com/photo/AF1QipOxdLBouTdK0Ru4ZaZNCqLJ4b2gh-pDZzzQG_8p) [Page3](https://photos.google.com/photo/AF1QipOjnzbpnJ7tBPi-KvsQ4UsV988glry0S890rQnt) [Page4](https://photos.google.com/photo/AF1QipOLQew6wGPSSyL-0tUUNedbeYQLIsZQrXCf-Dkw)<br/>
(Dynamic image gallery that appears on all rover pages - Curiosity, Opportunity and Spirit.)<br/>
[Initial Data Considerations](https://photos.google.com/album/AF1QipPEFVTSUa1KCMoMW-Zyf7JQLRd19eIVpqeKOE0e/photo/AF1QipMGjbnhVt2cL22bp0OT9dPxg5niOufVyYjMuQbF)<br/>
(Data is extensive and thus had to be heavily considered before building this part of the project.)<br/><br/>

## API Info

**NASA Open API details:** [NASA API](https://api.nasa.gov/)<br/>

- **InSight Mars Weather Service API**<br/>
  NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. This API provides per-Sol summary data for each of the last seven available Sols (Martian Days). As more data from a particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data are received on Earth. This API is maintained and provided by NASA Jet Propulsion Laboratory and Cornell University.<br/>
- **Mars Rover Photos API**<br/>
  This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too. Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.<br/>

**Google Maps (Mars) API details:** [Google Maps API]()<br/>
API and associated map capabilities no long available via Google.

## MVP/ Post MVP

#### MVP (Most Valuable Players)

- Pull data from NASAs Open APIs to generate weather widgets (small in fixed header and large on Weather page.)
- Embed toggle switch in header which enables users to toggle between celsius and fahrenheit data in weather widgets
- Pull image data from NASA's Open APIs to generate dynamic image galleries on each of the rover pages - Curiosity, Opportunity and Spirit
- Create sliding image carousel on homepage.

#### Post MVP

- Pull Google Maps API data to embed dynamic Mars map on Map webpage. (Post project note: Google no longer provides Mars map API and associated capabilities. Was unable to create embedded Google Mars Map, and instead used the embedded map as per the details within the Map component.)

## React Component Hierarchy

[Hierarchy Draft 1](https://photos.google.com/share/AF1QipOYuBPHb3RH9W9jBdtETHhBwoj3yavbeIQqGHrpgEPBs6_tfuG_WMjnFVA6D6SRPg?key=ZXlLZEJlakpOMDAzWC1hUFpVZFpfWDNrZFE1eEtB)<br />

[Hierarchy Draft 2](https://photos.google.com/u/0/album/AF1QipPEFVTSUa1KCMoMW-Zyf7JQLRd19eIVpqeKOE0e/photo/AF1QipMkkaT_rtQTLL6NQn7zWheBUaugHaqkPqmgVFuU)<br/>

[Hierarchy Draft 3](https://photos.google.com/u/0/album/AF1QipPEFVTSUa1KCMoMW-Zyf7JQLRd19eIVpqeKOE0e/photo/AF1QipOVcEPSP7gOZvvcWb9G61BTuXjRMcWgCLeb1TXO)<br/>

## Est. Time

| Component             | Priority | Estimated Time | Time Invested | Actual Time |
| :--------             | :------: | :------------: | :-----------: | :---------: |
| app                   |   High   |    1 Hours     |    2 Hours    |    1 Hours
| background            |   Medium |    1 Hours     |    2 Hours    |    1 Hours
| footer                |   Medium |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| header                |   High   |    3 Hours     |   4 Hours     |   4 Hours
| mobile-header         |   Low    |                |               |
| scroll-to-top-class   |   Urgent |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| home                  |   Medium |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| slider                |   Low    |    2 Hours     |   2 Hours     |    1 Hour
| geology               |   Medium |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| map                   |   Low    |                |               |
| weather               |   Medium |    6 Hours     |   6 Hours     |    8 Hours
| temp-toggle           |   High   |    2 Hours     |   2 Hours     |    2 Hours 
| weather-widget-lrg    |   High   |    3 Hours     |   4 Hours     |    12 Hours
| weather-items         |   High   |    1 Hour      |   2 Hours     |    0.5 Hours
| weather-widget-sml    |   High   |    3 Hours     |   4 Hours     |    4 Hours
| curiosity             |   Medium |    2 Hours     |   2 Hours     |    4 Hours 
| opportunity           |   Medium |    2 Hours     |   2 Hours     |    0.5 Hours
| spirit                |   Medium |    2 Hours     |   2 Hours     |    0.3 Hours
| rover-image-gallery   |   High   |    8 Hours     |   8 Hours     |    24 Hours
| deimos                |   Medium |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| phobos                |   Medium |   0.5 Hours    |   0.5 Hours   |   0.5 Hours
| Total:                |   ----   |    36~ Hours   |               |   65.3 Hours!!

## Code Snippet

### Rover Image Gallery component - Image gallery form submit function
The image gallery has been the one developed item that has caused me the most grief. The amount of time I expected to spend on this item has been well and truly surpassed by the time spent managing errors and fixing bugs. It still is causing me headaches!

```
handleFormSubmit = (sol, camera) => {
    this.setState({
      selectedSol: sol,
      selectedCameraForm: camera,
      isImageDataLoading: true
    });

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.selectedSol}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          let imageData = data.photos
          let manifestInfo = this.state.manifestDataPhotos
          let imageDataCamera = [];
          for ( let i = 0; i < imageData.length; i++ ) {
            if (imageData[i].camera.name === camera) {
              imageDataCamera.push(manifestInfo[i].sol)
            }
          }
          this.setState({
            allImageData: imageData,
            isImageDataLoading: false
          });
        },
        error => {
          if (error) {
            alert("Image gallery is currently unavailable");
          }
        }
      );

    let manifestDataPhotos = this.state.manifestDataPhotos

    let solData = this.state.solDataArray; 
    let solIndexNum = solData.indexOf(parseInt(sol, 10));
    let totalImagesAvail = manifestDataPhotos[solIndexNum].total_photos;

    // Set array of image src urls for sol
    let imageSrcArray = []
    let allImageData = this.state.allImageData
    for ( let i=0; i < (totalImagesAvail - 1); i++) {
      imageSrcArray.push(allImageData[i].img_src)
    }
    this.setState({
      allImageUrls: imageSrcArray
    });

    // Get nth image out of returned images
    let galleryImagesArray = [];
    if (totalImagesAvail > 25) {
      let num = Math.floor(totalImagesAvail / 25);
      for ( let i=0; i < 24; i++) {
        galleryImagesArray.push(allImageData[i*num].img_src)
      }
    } else if (totalImagesAvail <= 25) {
        for ( let i=0; i < 24; i++) {
          galleryImagesArray.push(allImageData[i].img_src)
        }
      }
    this.setState({
      imageGalleryImages: galleryImagesArray
    });    
  };
```

## Errors & Resolutions

**ERROR**: External error with NASA API data - InSight lander did not return temperature data for sol 322. Temperature data therefore unavailable for Weather component.<br/>
**SOLUTION**: Designed function to test for valid data and then returned placeholder text if temp data not available. (components/weather-widgets/weather-widget-lrg.js)<br/><br/>
**ERROR**: Error with if statement logic in small weather widget component - InSight lander did not return wind data for sol 327. Wind data therefore unavailable for small weather component i.e. dynamic display of sunny or windy icon. if statment not written to handle if wind data not available. Will not show anything (inc. temp) if wind data not available.<br/>
**SOLUTION**: Re-designed 'if statement' to test for valid wind data and temp data then returned placeholder text if wind data not available and/or temp data not available. If wind data is not available the default sunny icon will show and the temp data will still render. (components/weather-widgets/weather-widget-sml.js)<br/><br/>
**WARNING**: React Hook useEffect has a missing dependancy: 'props.imageManifestData.photos'. Either include it or remove the dependancy array.<br/>
**SOLUTION**: Refactored the component, removed the useEffect and added the fetch function in other components with required dependancy factored in.<br/><br/>
**ERROR**: TypeError: Cannot read property 'img_src' of undefined." - Suspect it is caused by the time it is taking for all image  API Call to complete.<br/>
**SOLUTION**: No solution sourced or put in place as yet. Further investigation is required with the possibility of adding a loading modal and component render timeout for a set amount of time to allow the API data to be fetched and be ready for use BEFORE it is called.<br/><br/>
 
