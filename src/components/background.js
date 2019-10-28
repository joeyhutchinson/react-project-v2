import React, { Component } from "react";

class Background extends Component {

  // Get random x, y positions for the stars based on the size of the container
   getRandomPosition = () => {
    let randomX = Math.floor(Math.random() * window.innerHeight);
    let randomY = Math.floor(Math.random() * window.innerWidth);
    return [randomX, randomY];
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render () {
    // Set number of stars to display within background
    const numStars = 1000;

    // Generate each star
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      star.style.top = this.getRandomPosition()[0] + "px";
      star.style.left = this.getRandomPosition()[1] + "px";
      document.body.appendChild(star);
    }
  return (<div className="background" />)
  }
}

export default Background;