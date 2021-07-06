import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 600,
  },
  map: {
    width: 640,
    height: 280,
    backgroundColor: theme.palette.action.hover
  },
}));

const SearchDetailResult = ({ incident }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {incident.title}
        </Typography>

        <Typography display="inline" variant="body1" className={classes.bold}>
          Stolen
        </Typography>
        <Typography display="inline" variant="body1" gutterBottom>
          {` ${new Date(incident.occurred_at * 1000).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            hour: "numeric",
            timeZone: "Europe/Berlin",
            hour12: true,
          })} at ${incident.address} `}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.map}>
        <div>Map</div>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          DESCRIPTION OF INCIDENT
        </Typography>
        <Typography variant="body1">
          {incident.description || "No description"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchDetailResult;
