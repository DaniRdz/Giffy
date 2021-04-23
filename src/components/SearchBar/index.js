import React, { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
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
