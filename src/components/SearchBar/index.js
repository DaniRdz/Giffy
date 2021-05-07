import React, { useState } from "react";
import { useLocation } from "wouter";

import "./SearchBar.css";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [, pushLocation] = useLocation();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gifs/${keyword}`);
    setKeyword("");
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

export default React.memo(SearchBar);
