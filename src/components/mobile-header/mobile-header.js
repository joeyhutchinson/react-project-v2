import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WeatherWidgetSml from "../weather-widgets/weather-widget-sml"
import MenuButton from "./menu-button"
import Menu from "./menu"

import "./mobile-header-style.css" 

class MobileHeader extends Component {
    state = {
        visible: false
    }

    handleMouseDown = (e) => {
        this.setState({
            visible: !this.state.visible
        })

        console.log("clicked");
        e.stopPropagation();
    }
    
    render() {
        
            return (
              <header id="mobile-header">
                <div className="mobile-site-head">
                  <NavLink key={null} to="/" className="mobile-site-title">
                    The Red Planet
                  </NavLink>
        
                <nav id="mobile-nav">
                <Menu 
                    handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible}
                    links={this.props.links}
                />
                </nav>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                </div>
                <WeatherWidgetSml
                    tempType={this.props.tempType}
                    handleTempToggle={this.props.handleTempToggle}
                    readableDate={this.props.readableDate}
                />
              </header>
            );
          }
        }

export default MobileHeader;