import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

import "./Nav.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h2>Your Movie App</h2>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
