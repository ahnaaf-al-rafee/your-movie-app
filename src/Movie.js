import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

import "./Movie.css"

const Movie = ({ name, price }) => {
  return (
    <div className="movie">
      <List>
        <ListItem>
        <ListItemText
              primary={name}
              secondary= {price} 
            />
        </ListItem>
      </List>
    </div>
  );
};

export default Movie;
