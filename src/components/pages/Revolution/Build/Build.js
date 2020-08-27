import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import build from "../../../../assets/buildIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  buildImage: {
    maxWidth: 1000,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: 700,
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

const Build = (props) => {
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
            Build
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Here’s where we get down to business.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Engineering begins after your approval on the final designs. We
            start by scaffolding out the project on a high level, prioritizing
            some areas over others.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Each area is then developed in order of importance until ready to be
            connected to the next piece.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Typically the backend, behind the scenes operations are completed
            first. Once all the services are in place we can then create the
            front end, user side of things.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Finishing the application doesn’t mean we’re done though, because we
            use extensive testing to guarantee compatibility with all intended
            devices.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Only after our rigorous examinations will we accept a product as
            finished, then pushing it through the production pipeline. This
            produces an optimized, compressed, consumer version of the code and
            assets ready for deployment.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img
          src={build}
          alt="building construction site"
          className={classes.buildImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Build;
