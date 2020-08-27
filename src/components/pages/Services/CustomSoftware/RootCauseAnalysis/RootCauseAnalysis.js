import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import roots from "../../../../../assets/root.svg";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
}));

const RootCauseAnalysis = (props) => {
  const { matchesSm } = props;
  const classes = useStyles();

  return (
    <Grid item container direction="row" wrap="nowrap">
      <Grid item container direction="column" alignItems="center" wrap="nowrap">
        <Grid item>
          <img
            src={roots}
            alt="tree with roots extending out"
            width={matchesSm ? "300em" : "450em"}
            height={matchesSm ? "300em" : "450em"}
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Typography variant="h4" align="center">
            Root-Cause Analysis
          </Typography>
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Typography variant="body1" paragraph align="center">
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RootCauseAnalysis;
