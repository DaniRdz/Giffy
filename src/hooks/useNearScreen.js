import { useEffect, useRef, useState } from "react";

export default function useNearScreen({
  distance = "100px",
  once = true,
} = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);
    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
