import React, { useState } from "react";
import "./AnimalFile.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const AnimalShow = ({ type }) => {
  const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
  };
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 5 + 5 * click + "px" }}
      />
      {/* <li>{type}</li> */}
    </div>
  );
};

export default AnimalShow;
