import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import iterate from "../../../../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  iterateImage: {
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

const Iterate = (props) => {
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
            Iterate
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            The cycle repeats whenever you come up with a new idea for extending
            your current project, or come up with a brand new system entirely.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            By planning for future features and changes we can build and evolve
            your application over time. As new use cases and customer needs
            develop we can respond with continuous integration of new content.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Our iterative process will keep you current and competitive,
            allowing you to quickly implement changes instead of waiting months
            for a single update.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img
          src={iterate}
          alt="falling dominos"
          className={classes.iterateImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Iterate;
