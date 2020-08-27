import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import mockup from "../../../../assets/mockupIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  mockImage: {
    maxWidth: 1000,
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

const Mockup = (props) => {
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
            Mockup
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            After we settle on the best path forward and decide on a solution to
            pursue, details like the cost and timeline will be finalized.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Then it’s time for us to start on your minimum viable product.
            That’s just a fancy term for a mockup, which doesn’t include colors,
            images, or any other polished design elements, but captures the
            essential layout structure and functionality.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            This helps us understand and refine the solution itself before
            getting distracted by specifics and looks.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img
          src={mockup}
          alt="basic web design outline"
          className={classes.mockImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Mockup;
