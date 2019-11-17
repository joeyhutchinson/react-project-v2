import React, { Component } from "react";

class MenuButton extends Component {

  render() {
    return (
      <div id="roundButton" onMouseDown={this.props.handleMouseDown}>
        <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="menu-button" style={(this.props.menuVisibility) ? {display: "none"}: {}}/>
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="menu-button" style={(this.props.menuVisibility) ? {}: {display: "none"}}/>
      </div>
    )
  }
}

export default MenuButton;