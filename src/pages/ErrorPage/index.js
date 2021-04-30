import React from "react";
import { useLocation } from "wouter";

import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";

import "./ErrorPage.css";

const gifsErrors = [
  "8L0Pky6C83SzkzU55a",
  "UHAYP0FxJOmFBuOiC2",
  "l1J9EdzfOSgfyueLm",
  "UoeaPqYrimha6rdTFV",
];

export default function ErroPage() {
  const [path, pushLocation] = useLocation();

  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  return (
    <>
      <SearchBar />
      <div className="error-page-wrapper">
        <h3>WOOOOOOPS... SOME ERROR OCURRED</h3>
        <img src={randomImage()} />
        <Button onClick={() => pushLocation("/")} name={"Go Home"} />
      </div>
    </>
  );
}
