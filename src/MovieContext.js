import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10",
      id: "23144",
    },
    {
      name: "Game of Thrones",
      price: "10",
      id: "23223644",
    },
    {
      name: "Inception",
      price: "10",
      id: "231123464",
    },
    {
      name: "Forrest Gump",
      price: "$10",
      id: "231123t464",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
