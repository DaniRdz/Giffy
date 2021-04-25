import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import getTrendingGifs from "../../services/getTrendingGifs";

import "./TrendingSearchCategories.css";

export default function TrendingSearchCategories() {
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(function () {
    getTrendingGifs().then(setTrendingGifs);
  }, []);

  return (
    <div className="trendig-search-categories">
      {trendingGifs.map((gif) => {
        return (
          <Link key={gif} href={`/gifs/${gif}`}>
            {gif}
          </Link>
        );
      })}
    </div>
  );
}
