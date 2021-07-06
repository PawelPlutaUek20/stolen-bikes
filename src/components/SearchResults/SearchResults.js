import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import IncidentCard from "../IncidentCard/IncidentCard";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  total: {
    textAlign: "end",
  },
  pagination: {
    marginTop: theme.spacing(2),
  },
}));

const SearchResults = ({ incidents }) => {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.total}>
          total: {incidents.length}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2} direction="column">
          {incidents.map((incident) => (
            <Grid item key={incident.id}>
              <IncidentCard incident={incident} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item container xs={12} justify="center">
        <Pagination
          size="large"
          onChange={(_, page) => setPage(page)}
          page={page}
          className={classes.pagination}
          count={Math.ceil(incidents.length / 10)}
          showFirstButton
          showLastButton
        />
      </Grid>
    </Grid>
  );
};

export default SearchResults;
