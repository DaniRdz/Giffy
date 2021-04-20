import React from "react";
import { Link } from "wouter";

import "./TrendingSearchCategories.css";

export default function TrendingSearchCategories({ gifs }) {
  return (
    <div className="trendig-search-categories">
      {gifs.map((gif) => {
        return (
          <Link key={gif} href={`/gifs/${gif}`}>
            - Gifs of {gif}
          </Link>
        );
      })}
    </div>
  );
}
