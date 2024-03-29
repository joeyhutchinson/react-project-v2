import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WeatherWidgetSml from "../components/weather-widgets/weather-widget-sml";

class Header extends Component {
  render() {
    // Creation of nav links
    const links = this.props.links.map((d, i) => {
      if (d.sublinks) {
        // If link has sublinks
        let dropdownlinks = d.sublinks.map((s, j) => {
          return (
            <NavLink
              key={j}
              to={s.route}
              className="dropdownlink"
              activeStyle={{
                backgroundColor: "#bd632f",
                color: "white",
                textDecoration: "none"
              }}
            >
              <li>{s.name}</li>
            </NavLink>
          );
        });
        return (
          <li className="droptop" key={i}>
            {d.name}
            <ul className={`dropdown-content ${d.name.toLowerCase()}`}>
              {dropdownlinks}
            </ul>
          </li>
        );
      } else {
        // If link does not have sublinks

        // Test for Home link and assign 'exact' prop to Home nav link
        if (d.name === "Home") {
          return (
            <NavLink
              key={i}
              to={d.route}
              className="navlink"
              activeStyle={{
                backgroundColor: "#bd632f",
                color: "white",
                textDecoration: "none"
              }}
              exact
            >
              <li>{d.name}</li>
            </NavLink>
          );
        } else {
          return (
            <NavLink
              key={i}
              to={d.route}
              className="navlink"
              activeStyle={{
                backgroundColor: "#bd632f",
                color: "white",
                textDecoration: "none"
              }}
            >
              <li>{d.name}</li>
            </NavLink>
          );
        }
      }
    });

    return (
      <header id="desktop-header">
        <div className="site-head">
          <NavLink key={null} to="/" className="site-title">
            The Red Planet
          </NavLink>
          <WeatherWidgetSml
            tempType={this.props.tempType}
            handleTempToggle={this.props.handleTempToggle}
            readableDate={this.props.readableDate}
          />
        </div>

        <nav id="desktop-nav">
          <ul>{links}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
