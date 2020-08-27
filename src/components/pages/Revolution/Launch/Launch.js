import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import launch from "../../../../assets/launchIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  launchImage: {
    maxWidth: 200,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
    },
  },
  titleText: {
    color: "#000",
    marginTop: "5em",
  },
  blockText: {
    color: "#fff",
    maxWidth: "20em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
    },
  },
}));

const Launch = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMd ? "center" : undefined}
        lg
      >
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="h4"
            gutterBottom
            className={classes.titleText}
          >
            Launch
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            The moment we’ve all been waiting for.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            When construction comes to a close you’re the first one to know.
            We’ll give our final demonstration to show off your shiny new
            software in the wild so you know exactly how it will look to your
            users.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            When you say the word, we press the button and launch your project
            out to the public. We’re there to ensure everything goes to plan so
            you can start reaping the rewards of your technological investment
            immediately.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img
          src={launch}
          alt="rocket on launchpad"
          className={classes.launchImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Launch;
