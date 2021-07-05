import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "./logo.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 25,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Police Departament of Berlin
        </Typography>
        <Typography variant="h5">Stolen Bykes</Typography>
      </div>
    </header>
  );
};

export default Header;
