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

const AboutCustomSoftware = (props) => {
  const { setSelectedIndex, matchesMd } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Hidden mdDown>
        <Grid item className={classes.backArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/services"
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to services" />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item container direction="column" className={classes.heading}>
        <Grid item>
          <Typography variant="h2" align={matchesMd ? "center" : undefined}>
            Custom Software Development
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Whether we’re replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Using regular commercial software leaves you with a lot of stuff you
            don’t need, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            We create exactly what you what, exactly how you want it.
          </Typography>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.forwardArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to iOS/Android app development"
            />
          </IconButton>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default AboutCustomSoftware;
