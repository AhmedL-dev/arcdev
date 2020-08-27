import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Grid, IconButton, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import backArrow from "../../../../../assets/backArrow.svg";
import forwardArrow from "../../../../../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  backArrow: {
    marginTop: "0.5em",
    marginRight: "1em",
    marginLeft: "-3.5em",
  },
  forwardArrow: {
    marginTop: "0.5em",
    marginLeft: "-1em",
  },
  arrowBackground: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
const AboutAppDevelopment = (props) => {
  const { setSelectedIndex, matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden mdDown>
        <Grid item className={classes.backArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/customsoftware"
            onClick={() => setSelectedIndex(1)}
          >
            <img src={backArrow} alt="Back to custom software development" />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item container direction="column" className={classes.heading}>
        <Grid item>
          <Typography variant="h2" align={matchesMd ? "center" : undefined}>
            iOS/Android App Development
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Mobile apps allow you to take your tools on the go.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Whether you want an app for your customers, employees, or yourself,
            we can build cross-platform native solutions for any part of your
            business process. This opens you up to a whole new world of
            possibilities by taking advantage of phone features like the camera,
            GPS, push notifications, and more.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Convenience. Connection.
          </Typography>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.forwardArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/websites"
            onClick={() => setSelectedIndex(3)}
          >
            <img src={forwardArrow} alt="Forward to website development" />
          </IconButton>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default AboutAppDevelopment;
