import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuLinks from "./menu-links"

class Menu extends Component {

  render() {
    let visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show"
    }
      return (
        <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
          <h2>Site Menu</h2>

        <MenuLinks links={this.props.links}/>

        </div>
      )
    }
  }


export default Menu;