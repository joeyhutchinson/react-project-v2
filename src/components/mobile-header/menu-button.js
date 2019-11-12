import React, { Component } from "react";

class MenuButton extends Component {

  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
        <img src="https://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png" alt="menu-button" style={{width: "20px", height: "auto", marginTop: "4px"}}/>
      </button>
    )
  }
}

export default MenuButton;