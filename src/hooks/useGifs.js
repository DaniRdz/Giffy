import { useEffect, useState } from "react";

import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyWord") || "random";

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("lastKeyWord", keyword);
    });
  }, [keyword]);
  return { gifs };
}
