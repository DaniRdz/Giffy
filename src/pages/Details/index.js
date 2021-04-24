import React from "react";
import { Redirect } from "wouter";

import Gif from "../../components/Gif";

import useSingleGif from "../../hooks/useSingleGif";

export default function Details({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isError) return <Redirect to="/404" />;

  return isLoading ? <div>LOADING...</div> : <Gif {...gif} />;
}
