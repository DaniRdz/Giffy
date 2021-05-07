import { useEffect, useState, useContext } from "react";

import GifsContext from "../context/GifsContext";

import getGifs from "../services/getGifs";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPage, setLoadingPage] = useState(false);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyWord") || "random";

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("lastKeyWord", keyword);
    });
  }, [keyword, setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingPage(false);
    });
  }, [page, setGifs, keywordToUse]);
  return { gifs, setPage, loadingPage };
}
