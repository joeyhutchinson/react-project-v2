import React, { useEffect } from "react";


function ScrollToTopOnMountFunctional() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
  export default ScrollToTopOnMountFunctional;