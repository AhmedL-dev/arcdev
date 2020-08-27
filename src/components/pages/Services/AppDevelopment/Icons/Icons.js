import React, { Fragment } from "react";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import swissKnife from "../../../../../assets/swissKnife.svg";
import extendAccess from "../../../../../assets/extendAccess.svg";
import increaseEngagement from "../../../../../assets/increaseEngagement.svg";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    maxWidth: "40em",
  },
  iconSpacing: {
    marginTop: "2.5em",
    marginBottom: "2.5em",
  },
  extendAccessIcon: {
    maxWidth: "28em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "15em",
    },
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
          <Typography align="center" variant="h4" gutterBottom>
            Extend Functionality
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={swissKnife}
            className={classes.extendAccessIcon}
            alt="Swiss Army Knife icon"
          />
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
          <Typography align="center" variant="h4" gutterBottom>
            Extend Access
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={extendAccess}
            alt="Tear off Icon"
            className={classes.extendAccessIcon}
          />
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
          <Typography align="center" variant="h4" gutterBottom>
            Increase Engagement
          </Typography>
        </Grid>
        <Grid item>
          <img src={increaseEngagement} alt="App with notification icon" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Icons;
