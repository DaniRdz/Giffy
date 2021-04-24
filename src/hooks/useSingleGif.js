import { useContext, useEffect, useState } from "react";

import GifsContext from "../context/GifsContext";

import getSingleGif from "../services/getSingleGif";

export default function useSingleGif({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { gifs } = useContext(GifsContext);

  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);

      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.log("getSingleGifError", err);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
