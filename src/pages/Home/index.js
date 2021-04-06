import React, { useState } from "react";
import { Link, useLocation } from "wouter";

import ListOfGifs from "../../components/ListOfGifs";

import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["panda", "mapache", "mexico", "batman", "superman"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gifs/${keyword}`);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="Search a Gif here..."
          type="text"
          onChange={handleChange}
          value={keyword}
        />
        <button>Search!!</button>
      </form>
      <h3>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3>The most popular Gifs</h3>
      {POPULAR_GIFS.map((gif, idx) => {
        return (
          <Link key={idx} href={`/gifs/${gif}`}>
            Gifs of {gif}
          </Link>
        );
      })}
    </>
  );
}
