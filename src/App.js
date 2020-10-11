import {
  Container,
  createMuiTheme,
  Grid,
  Paper,
  Switch,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <MovieProvider>
          <Container>
            <Nav />
            <div className="app">
              <div>
                <Switch
                  checked={darkmode}
                  onChange={() => setDarkmode(!darkmode)}
                ></Switch>
                <small>Change Theme</small>
              </div>

              <Grid container justify="stretch">
                <Grid item xs={12} md={6}>
                  <div className="app__form">
                    <AddMovie />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="app__movie">
                    <MovieList />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </MovieProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
