import React, { useCallback } from "react";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";
import TrendingSearchCategories from "../../components/TrendingSearchCategories";
import { Helmet } from "react-helmet";

import { useGifs } from "../../hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>GIFFY | Home</title>
      </Helmet>
      <SearchBar />
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The Most Popular Gifs</h3>
      <TrendingSearchCategories />
    </>
  );
}
