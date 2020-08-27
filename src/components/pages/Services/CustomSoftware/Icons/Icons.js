import React, { Fragment } from "react";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import lightbulb from "../../../../../assets/bulb.svg";
import cash from "../../../../../assets/cash.svg";
import stopwatch from "../../../../../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    maxWidth: "40em",
  },
  iconSpacing: {
    marginTop: "2.5em",
    marginBottom: "2.5em",
  },
}));

const Icons = (props) => {
  const { matchesSm } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={
          matchesSm
            ? clsx(classes.iconContainer, classes.iconSpacing)
            : classes.iconContainer
        }
      >
        <Grid item>
          <Typography variant="h4">Save Energy</Typography>
        </Grid>
        <Grid item>
          <img src={lightbulb} alt="lightbulb" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={
          matchesSm
            ? clsx(classes.iconContainer, classes.iconSpacing)
            : classes.iconContainer
        }
      >
        <Grid item>
          <Typography variant="h4">Save Time</Typography>
        </Grid>
        <Grid item>
          <img src={stopwatch} alt="stopwatch" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={
          matchesSm
            ? clsx(classes.iconContainer, classes.iconSpacing)
            : classes.iconContainer
        }
      >
        <Grid item>
          <Typography variant="h4">Save Money</Typography>
        </Grid>
        <Grid item>
          <img src={cash} alt="cash" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Icons;
