import { Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import bike from "./bike.svg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    flex: "auto",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    maxHeight: 200,
  },
  imageContainer: {
    width: 200,
    height: 200,
    flex: "none",
  },
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 4,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  title: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    padding: 25,
  },
}));

const IncidentCard = ({ incident }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.imageContainer}>
        {incident.media.image_url_thumb ? (
          <img
            alt="bike"
            src={incident.media.image_url_thumb}
            className={classes.image}
          />
        ) : (
          <img alt="bike" src={bike} className={classes.image} />
        )}
      </div>
      <div direction="column" className={classes.contentContainer}>
        <Typography className={classes.title} gutterBottom variant="h6">
          {incident.title}
        </Typography>

        <Typography
          className={classes.description}
          gutterBottom
          variant="body1"
        >
          {incident.description || "No description"}
        </Typography>

        <Typography gutterBottom variant="body1">
          {`${new Date(incident.occurred_at * 1000).toLocaleDateString()} - ${
            incident.address
          } `}
        </Typography>
      </div>
    </Paper>
  );
};

export default IncidentCard;
