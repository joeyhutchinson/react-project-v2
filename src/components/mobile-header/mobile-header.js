import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WeatherWidgetSml from "../weather-widgets/weather-widget-sml"
import MenuButton from "./menu-button"
import Menu from "./menu"

import "./mobile-header-style.css" 

class MobileHeader extends Component {
    state = {
        visible: false,
        isHide: false
    }

    handleMouseDown = (e) => {
        this.setState({
            visible: !this.state.visible
        })

        console.log("clicked");
        e.stopPropagation();
    }

    hideWidget = () => {
        const { isHide } = this.state
 
        window.scrollY > this.prev ?
        !isHide && this.setState({ isHide: true })
        :
        isHide && this.setState({ isHide: false });
 
        this.prev = window.scrollY;
     }

    componentDidMount(){
        window.addEventListener('scroll', this.hideWidget);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideWidget);
    }
    
    render() {
        const classHide = this.state.isHide ? 'hide' : '';
        
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
                <div className={`widget-wrapper ${classHide}`}>
                <WeatherWidgetSml
                    tempType={this.props.tempType}
                    handleTempToggle={this.props.handleTempToggle}
                    readableDate={this.props.readableDate}
                />
                </div>
              </header>
            );
          }
        }

export default MobileHeader;