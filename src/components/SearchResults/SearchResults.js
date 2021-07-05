import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import IncidentCard from "../IncidentCard/IncidentCard";

const useStyles = makeStyles((theme) => ({
  total: {
    textAlign: "end",
  },
}));

const SearchResults = ({ incidents }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={classes.total}>total: {incidents.length}</div>
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

      <Grid item xs={12}>
        <div>pagination</div>
      </Grid>
    </Grid>
  );
};

export default SearchResults;
