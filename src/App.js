import React from "react";
import { Route, Link } from "wouter";

import ListOfGifs from "./components/ListOfGifs";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>

        <Link href="/gifs/panda">Gifs of pandas</Link>
        <Link href="/gifs/mapache">Gifs of mapaches</Link>
        <Link href="/gifs/batman">Gifs of Batman</Link>
        <Link href="/gifs/superman">Gifs of superman</Link>

        <Route path="/gifs/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}
