import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";

import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
}));

const App = () => {
  const classes = useStyles();

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=berlin"
    )
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
