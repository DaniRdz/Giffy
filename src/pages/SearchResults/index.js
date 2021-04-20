import React from "react";

import ListOfGifs from "../../components/ListOfGifs";

import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs } = useGifs({ keyword });

  return (
    <>
      <h3 style={{ textAlign: "left", textTransform: "capitalize" }}>
        Gifs Of {decodeURI(keyword)}
      </h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
