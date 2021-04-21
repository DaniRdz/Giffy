import React from "react";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";
import TrendingSearchCategories from "../../components/TrendingSearchCategories";

import { useGifs } from "../../hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <SearchBar />
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The Most Popular Gifs</h3>
      <TrendingSearchCategories />
    </>
  );
}
