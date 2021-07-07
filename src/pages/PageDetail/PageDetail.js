import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SearchDetailResult from "../../components/SearchDetailResults/SearchDetailResult";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
  header: {
    marginTop: theme.spacing(2),
  },
}));

const PageDetail = ({ match }) => {
  const classes = useStyles();

  const [incident, setIncident] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://bikewise.org:443/api/v2/incidents/${match.params.id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(false);
        setIncident(jsonResponse.incident);
      })
      .catch((_) => {
        setLoading(false);
        setError("Ooops, something went wrong");
      });
  }, [match.params.id]);

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
