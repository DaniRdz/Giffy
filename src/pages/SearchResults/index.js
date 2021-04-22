import React, { useEffect } from "react";

import ListOfGifs from "../../components/ListOfGifs";

import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });
  const { isNearScreen, fromRef } = useNearScreen({
    once: false,
    distance: "500px",
  });

  const handleClickNextPage = () => setPage((prevPage) => prevPage + 1);
  //const handleClickNextPage = () => console.log("next page");

  useEffect(
    function () {
      if (isNearScreen) handleClickNextPage();
    },
    [isNearScreen]
  );

  return (
    <>
      <h3 style={{ textAlign: "left", textTransform: "capitalize" }}>
        Gifs Of {decodeURI(keyword)}
      </h3>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={fromRef}></div>
    </>
  );
}
