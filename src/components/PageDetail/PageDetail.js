import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import SearchDetailResult from "../SearchDetailResults/SearchDetailResult";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
  header: {
    marginTop: theme.spacing(2),
  },
}));

const PageDetail = () => {
  const classes = useStyles();

  const { id } = useParams();

  const [incident, setIncident] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/db.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(false);
        setIncident(
          jsonResponse.incidents.find((e) => parseInt(e.id) === parseInt(id)) ||
            []
        );
      })
      .catch((_) => {
        setLoading(false);
        setError("Ooops, something went wrong");
      });
  }, [id]);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={12} className={classes.header}>
          <Header />
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
          ) : incident.length === 0 ? (
            <Typography variant="body1" gutterBottom>
              No results
            </Typography>
          ) : (
            <SearchDetailResult incident={incident} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageDetail;
