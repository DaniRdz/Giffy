import React from "react";
import { Link } from "wouter";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";

import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["panda", "mapache", "mexico", "batman", "superman"];

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <SearchBar />
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The most popular Gifs</h3>
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
