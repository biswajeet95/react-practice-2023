import React from "react";
import './AnimalFile.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const AnimalFile = () => {
  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };
  const renderAnimal = animals.map((animal, index) => {
   return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="animal-file">
      <button onClick={handleClick}>Show Animal</button>
      <div className="animal-list">{renderAnimal}</div>
    </div>
  );
};

export default AnimalFile;
