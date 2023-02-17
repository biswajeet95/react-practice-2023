import React from "react";
import { useState } from "react";
import './ImagePro.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>Enter Search Term</label>
      <input value={term} onChange={handleChange} />
    </form>
  </div>
  );
};

export default SearchBar;
