import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import consultation from "../../../../assets/consultationIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  consultImage: {
    maxWidth: 700,
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

const Consultation = (props) => {
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
            Consultation
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Our process begins the moment you realize you need a piece of
            technology for your business. Whether you already have an idea for
            where to start and what to do, or if you just know you want to step
            things up, our initial consultation will help you examine your
            business holistically to find the best solutions.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Detailed notes will be taken on your requirements and constraints,
            while taking care to identify other potential areas for
            consideration.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Cutting-edge advancements in machine learning like object detection
            and natural language processing allow computers to do things
            previously unimaginable, and our expertise and intuition will help
            usher you into this new future of possibilities.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img
          src={consultation}
          alt="handshake"
          className={classes.consultImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Consultation;
