import React from "react";

function Background() {
  // Set number of stars to display within background
  const numStars = 1000;

  // Generate each star
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = getRandomPosition()[0] + "px";
    star.style.left = getRandomPosition()[1] + "px";
    document.body.appendChild(star);
  }

  // Get random x, y positions based on the size of the container
  function getRandomPosition() {
    let randomX = Math.floor(Math.random() * window.innerHeight);
    let randomY = Math.floor(Math.random() * window.innerWidth);
    return [randomX, randomY];
  }

  return <div className="background" />;
}

export default Background;
