import React, { useContext, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

import "./AddMovie.css";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addMovie = (event) => {
    event.preventDefault();

    setMovies((state) => [...state, { name: name, price: price }]);

    setName("");
    setPrice("");
  };

  return (
    <div className="addMovie">
      <div>
        <h3>Add Your Favorite Movies</h3>
      </div>
      <FormControl>
        <InputLabel>Add a Movie</InputLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input
          type="text"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={addMovie}
        disabled={!name && !price}
      >
        Submit
      </Button>
    </div>
  );
}

export default AddMovie;
