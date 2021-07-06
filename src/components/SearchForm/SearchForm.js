import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textField: {
    width: "31%",
  },
  inputField: {
    width: "22%",
  },
  buttonField: {
    maxHeight: 56,
    width: "20%",
    marginTop: 12,
  },
});

const SearchForm = () => {
  const classes = useStyles();

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <Grid container spacing={2} justify="space-between">
      <TextField
        className={classes.textField}
        label="Search case descriptions"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.inputField}
          autoOk
          disableFuture
          variant="inline"
          placeholder="18.08.2014"
          format="dd.MM.yyyy"
          label="From"
          value={fromDate}
          onChange={(date) => setFromDate(date)}
        />
        <KeyboardDatePicker
          className={classes.inputField}
          autoOk
          disableFuture
          variant="inline"
          placeholder="18.08.2014"
          format="dd.MM.yyyy"
          label="To"
          value={toDate}
          onChange={(date) => setToDate(date)}
        />
      </MuiPickersUtilsProvider>
      <Button
        color="primary"
        className={classes.buttonField}
        variant="contained"
      >
        Find cases
      </Button>
    </Grid>
  );
};

export default SearchForm;
