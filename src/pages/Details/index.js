import React from "react";
import { Redirect } from "wouter";

import Gif from "../../components/Gif";

import useSingleGif from "../../hooks/useSingleGif";

export default function Details({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isError) return <Redirect to="/404" />;
  if (isLoading) return <div>LOADING...</div>;
  if (!gif) return null;

  return (
    <>
      <h3>{gif.title}</h3>
      <div style={{ alignSelf: "center" }}>
        <Gif {...gif} />
      </div>
    </>
  );
}
