import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 640,
  },
  header: {
    marginTop: theme.spacing(2),
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom align="center">
            404 Page Not Found
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageNotFound;
