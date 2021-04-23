import React from "react";
import { Link } from "wouter";

import "./Gif.css";

function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <h4>{title}</h4>
      <Link to={`/gif/${id}`} className="Gif-link">
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}

export default React.memo(Gif);
