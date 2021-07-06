import { Paper, Typography, makeStyles, Link } from "@material-ui/core";
import React from "react";
import BikeIcon from "./BikeIcon";

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
    lineClamp: 3,
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
  svg: {
    backgroundColor: theme.palette.action.hover,
    fill: theme.palette.background.paper,
    width: 150,
    height: 150,
  },
  reported: {
    marginTop: "auto",
    alignSelf: "flex-end",
    fontStyle: "italic",
  },
  centerImage: {
    padding: 25,
  },
  link: {
    color: theme.palette.info.light,
  },
}));

const IncidentCard = ({ incident }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.imageContainer}>
        {incident.media.image_url_thumb ? (
          <div>
            <img
              alt="bike"
              src={incident.media.image_url_thumb}
              className={classes.image}
            />
          </div>
        ) : (
          <div className={classes.centerImage}>
            <BikeIcon className={classes.svg} />
          </div>
        )}
      </div>
      <div direction="column" className={classes.contentContainer}>
        <Typography className={classes.title} gutterBottom variant="h6">
          <Link
            className={classes.link}
            underline="always"
            href={`/case/${incident.id}`}
          >
            {incident.title}
          </Link>
        </Typography>

        <Typography
          className={classes.description}
          gutterBottom
          variant="body1"
        >
          {incident.description || "No description"}
        </Typography>

        <Typography gutterBottom variant="body1" className={classes.title}>
          {`${new Date(incident.occurred_at * 1000).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "2-digit",
              weekday: "short",
            }
          )} - ${incident.address} `}
        </Typography>
        <Typography variant="caption" className={classes.reported}>
          {`Reported: ${new Date(incident.updated_at * 1000).toLocaleString(
            "en-US"
          )}`}
        </Typography>
      </div>
    </Paper>
  );
};

export default IncidentCard;
