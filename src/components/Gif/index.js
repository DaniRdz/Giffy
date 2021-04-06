import React from "react";
import { Link } from "wouter";

export default function Gif({ id, title, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <Link to={`/gif/${id}`}>
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}
