import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
  header: {
    marginTop: theme.spacing(2),
  },
}));

const PageIndex = () => {
  const classes = useStyles();

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchIncidents = (
    query = "",
    occurred_after = "",
    occurred_before = ""
  ) => {
    setLoading(true);
    fetch(
      `https://bikewise.org:443/api/v2/incidents?incident_type=theft&query=${query}&occurred_after=${occurred_after}&occurred_before=${occurred_before}&page=1&per_page=22&proximity=Berlin`
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
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <SearchForm loading={loading} handleClick={fetchIncidents} />
        </Grid>

        <Grid item xs={12}>
          {loading ? (
            <Typography variant="body1" gutterBottom>
              Loading...
            </Typography>
          ) : error ? (
            <Typography variant="body1" gutterBottom color="error">
              {error}
            </Typography>
          ) : incidents.length === 0 ? (
            <Typography variant="body1" gutterBottom>
              No results
            </Typography>
          ) : (
            <SearchResults incidents={incidents} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageIndex;
