import React from "react";

import ListOfGifs from "../../components/ListOfGifs";

import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });

  const handleClickNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <h3 style={{ textAlign: "left", textTransform: "capitalize" }}>
        Gifs Of {decodeURI(keyword)}
      </h3>
      <ListOfGifs gifs={gifs} />
      <br />
      <button onClick={handleClickNextPage}>See More Gifs</button>
    </>
  );
}
