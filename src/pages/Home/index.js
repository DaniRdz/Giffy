import React, { useEffect } from "react";

import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearchCategories from "../../components/TrendingSearchCategories";
import { Helmet } from "react-helmet-async";

import { useGifs } from "../../hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>GIFFY | Home</title>
      </Helmet>
      <h3 style={{ textAlign: "left" }}>Recent Search Gifs</h3>
      <ListOfGifs gifs={gifs} />
      <h3 style={{ textAlign: "left" }}>The Most Popular Gifs</h3>
      <TrendingSearchCategories />
    </>
  );
}
