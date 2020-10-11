import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";

import "./Nav.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6">Your Movie App</Typography>
          <div className="nav_right">
            <ShopTwoIcon />
            <span>List of Movies: {movies.length}</span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
