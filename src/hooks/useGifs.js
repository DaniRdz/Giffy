import { useEffect, useState, useContext } from "react";

import GifsContext from "../context/GifsContext";

import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyWord") || "random";

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("lastKeyWord", keyword);
    });
  }, [keyword, setGifs]);
  return { gifs };
}
