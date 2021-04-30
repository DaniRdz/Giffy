import React from "react";

import "./Button.css";

export default function Button({ onClick, name }) {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {name}
      </button>
    </>
  );
}
