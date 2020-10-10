import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";

import "./Nav.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h2>Your Movie App</h2>
      <div>
        <ShopTwoIcon />
        <span>List of Movies: {movies.length}</span>
      </div>
    </div>
  );
};

export default Nav;
