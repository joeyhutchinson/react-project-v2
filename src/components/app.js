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

function App(props) {

  // Handle temperature toggle. False = Fahreinheit. True = Celsius.
  const [tempType, setTempType] = useState(false);
  let handleTempType = (e) => {
   setTempType(!tempType)
  }

  return (
    <Router>
      <div>
        <Background />
        <Header links={props.links} handleTempToggle={handleTempType} tempType={tempType}/>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="/geology" component={Geology} />
          <Route path="/weather" render={(props) => <Weather {...props} tempType={tempType}/>}/>
          <Route path="/map" component={Maps} />
          <Route path="/moons/phobos" component={Phobos} />
          <Route path="/moons/deimos" component={Deimos} />
          <Route path="/rovers/curiosity" component={Curiosity} />
          <Route path="/rovers/opportunity" component={Opportunity} />
          <Route path="/rovers/spirit" component={Spirit} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
