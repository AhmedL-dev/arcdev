import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import review from "../../../../assets/reviewIcon.svg";

const useStyles = makeStyles((theme) => ({
  imageAlign: {
    alignSelf: "center",
  },
  revImage: {
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

const Review = (props) => {
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
            Review
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Before moving any farther we come back to you with our progress.
            This gives you the freedom to discuss any changes you may want or
            any ideas you may have come up with before any heavy lifting has
            been done.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            We give you an interactive demonstration of the mockups, thoroughly
            explaining the thought process that went into each screen and every
            anticipated feature.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Once you’re completely satisfied with the vision for our solution we
            get down to the nitty gritty, fine-details of design.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg className={classes.imageAlign}>
        <img src={review} alt="magnifying glass" className={classes.revImage} />
      </Grid>
    </Fragment>
  );
};

export default Review;
