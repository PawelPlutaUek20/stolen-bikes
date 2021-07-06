import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";

import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
  header: {
    marginTop: 24
  }
}));

const App = () => {
  const classes = useStyles();

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(false);
        setIncidents(jsonResponse.incidents);
      })
      .catch((e) => {
        setLoading(false);
        setError("Ooops, something went wrong");
      });
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <SearchForm />
        </Grid>

        <Grid item xs={12}>
          {loading ? (
            <div>loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : incidents.length === 0 ? (
            <div>No results</div>
          ) : (
            <SearchResults incidents={incidents} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
