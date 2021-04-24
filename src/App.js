import React from "react";
import { Route, Link } from "wouter";

import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";

import { GifsContextProvider } from "./context/GifsContext";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link href="/">
          <h1 className="App-title">Giffy</h1>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/gifs/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Details} />
          <Route
            path="/404"
            component={() => <h1>WOOOOOOPS... SOME ERROR OCURRED</h1>}
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}
