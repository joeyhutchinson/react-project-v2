import React from "react";
import MenuLinks from "./menu-links"

const Menu = (props) => {

  
  let visibility = "hide";
  if (props.menuVisibility) {
    visibility = "show"
  }
    return (
      <div id="flyoutMenu" onMouseDown={props.handleMouseDown} className={visibility}>
        <h2>Site Menu</h2>

      <MenuLinks links={props.links}/>

      </div>
    )
}



export default Menu;