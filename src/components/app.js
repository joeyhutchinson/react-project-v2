import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import dotenv from 'dotenv';

import Background from "./background";
import Header from "./header";
import Footer from "./footer";
import Home from "./homepage/home";
import Geology from "./main/geology";
import Weather from "./main/weather";
import Phobos from "./main/moons/phobos";
import Deimos from "./main/moons/deimos";
import Curiosity from "./main/rovers/curiosity";
import Opportunity from "./main/rovers/opportunity";
import Spirit from "./main/rovers/spirit";
import Maps from "./main/map";

dotenv.config();

const App = (props) => {

  const [tempType, setTempType] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [allWeatherData, setAllWeatherData] = useState({});

  // Fetch weather data via API call and set to component state
  useEffect(  () => {
    let fetchData = async () => {
      const url = `https://api.nasa.gov/insight_weather/?api_key=${
        process.env.REACT_APP_NASA_API_KEY
      }&feedtype=json&ver=1.0`;
      let response = await fetch(url);
      let data = await response.json()
      const solsReturned = data.sol_keys;
      const currentSol = solsReturned[solsReturned.length - 1];
      setIsDataLoading(false);
      setAllWeatherData({weatherData: data, 
                        currentSolData: data[currentSol], 
                        currentSolNum: currentSol, 
                        isTempsAvail: data.validity_checks[currentSol].AT.valid,
                        isWindAvail: data.validity_checks[currentSol].HWS.valid});
          }
    fetchData();
  }, []);
  // Set temp to return in fahrenheit or celsius 
  let handleTempType = () => {
    setTempType(!tempType)
  };

  // Convert date data to readable string
  const readableDate = (date, monthType) => {
    let monthNum = new Date(date).getMonth();
    const monthsShort = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."
    ];
    const monthsLong = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    if (monthType === 'short') {
      return `${monthsShort[monthNum]} ${new Date(date).getDate()}`;
    } else if (monthType === 'long') {
      return `${monthsLong[monthNum]} ${new Date(date).getDate()}`;
    }
  };

  return (
    <Router>
      <div>
        <Background />
        <Header links={props.links} handleTempToggle={handleTempType} tempType={tempType} isDataLoading={isDataLoading}allWeatherData={allWeatherData} readableDate={readableDate}/>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="/geology" component={Geology} />
          <Route path="/weather" render={(props) => <Weather {...props} tempType={tempType} readableDate={readableDate}/>}/>
          <Route path="/map" component={Maps} />
          <Route path="/moons/phobos" component={Phobos} />
          <Route path="/moons/deimos" component={Deimos} />
          <Route path="/rovers/curiosity" render={(props) => <Curiosity {...props} readableDate={readableDate}/>}/>
          <Route path="/rovers/opportunity" render={(props) => <Opportunity {...props} readableDate={readableDate}/>}/>
          <Route path="/rovers/spirit" render={(props) => <Spirit {...props} readableDate={readableDate}/>}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
