import React, { useEffect, useState } from "react";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";
import TrendingSearchCategories from "../../components/TrendingSearchCategories";

import { useGifs } from "../../hooks/useGifs";
import getTrendingGifs from "../../services/getTrendingGifs";

export default function Home() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const { gifs } = useGifs();
  useEffect(function () {
    getTrendingGifs().then(setTrendingGifs);
  }, []);

  return (
    <>
      <SearchBar />
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The Most Popular Gifs</h3>
      <TrendingSearchCategories gifs={trendingGifs} />
    </>
  );
}
