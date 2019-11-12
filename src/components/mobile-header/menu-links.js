import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuLinks extends Component {

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
              className="mobile-dropdownlink"
              activeStyle={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <li>{s.name}</li>
            </NavLink>
          );
        });
        return (
          <li className="mobile-droptop" key={i}>
            {d.name}
            <ul className={`mobile-dropdown-content ${d.name.toLowerCase()}`}>
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
              className="mobile-navlink"
              activeStyle={{
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
              className="mobile-navlink"
              activeStyle={{
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
     
          <ul>{links}</ul>
    );
  }
}

export default MenuLinks;
