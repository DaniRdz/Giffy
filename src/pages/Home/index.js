import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["panda", "mapache", "mexico", "batman", "superman"];

export default function Home() {
  return (
    <>
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
