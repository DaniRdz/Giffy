import React, { useCallback } from "react";
import { useLocation } from "wouter";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";
import TrendingSearchCategories from "../../components/TrendingSearchCategories";

import { useGifs } from "../../hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();
  const [path, pushLocation] = useLocation();

  const handleOnSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/gifs/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchBar onSubmit={handleOnSubmit} />
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The Most Popular Gifs</h3>
      <TrendingSearchCategories />
    </>
  );
}
