import React from "react";
import { Route, Link, Switch } from "wouter";

import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";
import ErrorPage from "./pages/ErrorPage";

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
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/gifs/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Details} />
            <Route component={ErrorPage} />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  );
}
