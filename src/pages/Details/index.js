import React, { useContext } from "react";

import Gif from "../../components/Gif";

import GifsContext from "../../context/GifsContext";

export default function Details({ params }) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((gif) => gif.id === params.id);

  return <Gif {...gif} />;
}
