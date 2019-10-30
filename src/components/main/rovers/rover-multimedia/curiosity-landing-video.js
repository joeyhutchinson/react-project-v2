import React from "react";

function CuriosityLandingVideo (props) {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={"https://www.youtube.com/embed/Ki_Af_o9Q9s"}
        frameBorder="0"
      />
    </div>
    // <iframe width="560" height="315" src= frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  )
}

export default CuriosityLandingVideo;