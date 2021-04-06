import React, { useEffect, useState } from "react";

import ListOfGifs from "../../components/ListOfGifs";

import getGifs from "../../services/getGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
