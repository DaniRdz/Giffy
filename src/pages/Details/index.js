import React from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";

import Gif from "../../components/Gif";

import useSingleGif from "../../hooks/useSingleGif";

export default function Details({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isError) return <Redirect to="/404" />;
  if (isLoading)
    return (
      <>
        <Helmet>
          <title>...Loading</title>
        </Helmet>
        <div>LOADING...</div>
      </>
    );
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>GIFFY | {gif.title}</title>
      </Helmet>
      <h3>{gif.title}</h3>
      <div style={{ alignSelf: "center" }}>
        <Gif {...gif} />
      </div>
    </>
  );
}
