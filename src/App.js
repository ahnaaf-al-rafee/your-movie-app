import React from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <MovieProvider>
      <Nav />
      <div className="app">
        <div className="app__form">
          <AddMovie />
        </div>
        <div className="app__movie">
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
