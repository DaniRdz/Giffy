import React, { useState } from "react";
import { useLocation } from "wouter";

import "./SearchBar.css";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gifs/${keyword}`);
  };
  return (
    <form className="search-bar" onSubmit={handleOnSubmit}>
      <input
        placeholder="Search a Gif here..."
        type="text"
        onChange={handleChange}
        value={keyword}
      />
      <button>Search!!</button>
    </form>
  );
}
