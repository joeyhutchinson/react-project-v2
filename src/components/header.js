import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    // Creation of nav links
    const links = this.props.links.map((d, i) => {
      if (d.sublinks) {
        // If link has sublinks
        let dropdownlinks = d.sublinks.map((s, j) => {
          return (
            <Link key={j} to={s.route} className="dropdownlink">
              <li>{s.name}</li>
            </Link>
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
        return (
          <Link key={i} to={d.route} className="navlink">
            <li>{d.name}</li>
          </Link>
        );
      }
    });

    return (
      <header>
        <div className="site-head">
          <Link key={null} to="/" className="site-title">
            The Red Planet
          </Link>
        </div>
        <nav id="nav">
          <ul>{links}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
