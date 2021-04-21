import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import getTrendingGifs from "../../services/getTrendingGifs";

import useNearScreen from "../../hooks/useNearScreen";

import "./TrendingSearchCategories.css";

function TrendingSearchCategories() {
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(function () {
    getTrendingGifs().then(setTrendingGifs);
  }, []);

  return (
    <div className="trendig-search-categories">
      {trendingGifs.map((gif) => {
        return (
          <Link key={gif} href={`/gifs/${gif}`}>
            - Gifs of {gif}
          </Link>
        );
      })}
    </div>
  );
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      {isNearScreen ? <TrendingSearchCategories /> : null}
    </div>
  );
}
