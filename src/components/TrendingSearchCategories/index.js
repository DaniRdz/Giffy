import React, { Suspense } from "react";

import useNearScreen from "../../hooks/useNearScreen";

const TrendingSearchCategories = React.lazy(() =>
  import("./TrendigSearchCategories")
);
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={"...Loading"}>
        {isNearScreen ? <TrendingSearchCategories /> : null}
      </Suspense>
    </div>
  );
}
