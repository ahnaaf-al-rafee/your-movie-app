import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import db from "./firebase";
import "./Movie.css";

const Movie = ({ movie, name, price }) => {
  // console.log(movie);
  let str = "$";
  return (
    <div className="movie">
      <List>
        <ListItem>
          <ListItemText primary={name} secondary= {str.concat(price)} />
          <DeleteIcon
            onClick={(event) => {
              db.collection("movies").doc(movie.id).delete();
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Movie;
