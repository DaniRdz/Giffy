import React, { useCallback, useEffect, useState } from "react";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

import ListOfGifs from "../../components/ListOfGifs";
import SearchBar from "../../components/SearchBar";

import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });
  const { isNearScreen, fromRef } = useNearScreen({
    once: false,
    distance: "500px",
  });

  const title = gifs ? `${gifs.length} Results Of ${decodeURI(keyword)}` : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  return (
    <>
      <Helmet>
        <title> GIFFY | {title}</title>
      </Helmet>
      <SearchBar />
      <h3 style={{ textAlign: "left", textTransform: "capitalize" }}>
        Gifs Of {decodeURI(keyword)}
      </h3>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={fromRef}></div>
    </>
  );
}
