import React, { useState, useEffect } from "react";

const WindowsSize = () => {
  const [countWindow, setCountWindow] = useState(window.screen.width);

  const actualWidth = () => {
    setCountWindow(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove Event");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <p>The actual size of windows width is </p>
      <h2>{countWindow}</h2>
    </div>
  );
};

export default WindowsSize;
