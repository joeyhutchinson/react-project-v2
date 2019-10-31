import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

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

const App = (props) => {

  // Handle temperature toggle. False = Fahreinheit. True = Celsius.
  const [tempType, setTempType] = useState(false);

  let handleTempType = (e) => {
   setTempType(!tempType)
  }

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
      return `${new Date(date).getDate()} ${monthsLong[monthNum]} ${new Date(date).getFullYear()}`;
    }
  };

  return (
    <Router>
      <div>
        <Background />
        <Header links={props.links} handleTempToggle={handleTempType} tempType={tempType} readableDate={readableDate}/>
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