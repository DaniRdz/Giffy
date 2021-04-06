import React from "react";
import { Route, Link } from "wouter";

import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link href="/">
          <h1>Giffy</h1>
        </Link>
        <Route path="/" component={Home} />
        <Route path="/gifs/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Details} />
      </section>
    </div>
  );
}
