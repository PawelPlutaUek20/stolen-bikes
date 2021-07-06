import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import IncidentCard from "../IncidentCard/IncidentCard";
import { Pagination } from "@material-ui/lab";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

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

  const history = useHistory();
  const location = useLocation();
  const page = parseInt(queryString.parse(location.search).page) || 1;

  const handlePagination = (_, page) => {
    const newQueryString = queryString.stringify({
      ...queryString.parse(location.search),
      page,
    });
    history.push(`/?${newQueryString}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.total}>
          total: {incidents.length}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2} direction="column">
          {incidents.slice((page - 1) * 10, page * 10).map((incident) => (
            <Grid item key={incident.id}>
              <IncidentCard incident={incident} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item container xs={12} justify="center">
        <Pagination
          size="large"
          onChange={handlePagination}
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
