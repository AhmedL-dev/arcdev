import React, { Fragment } from "react";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Animation from "../../../../ui/Animation/Animation";

import automationAnimation from "../../../../../animations/automationAnimation/data.json";
import uiAnimation from "../../../../../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
  itemSpacing: {
    marginBottom: "15em",
  },
}));

const AutomationUIDesign = (props) => {
  const { matchesMd, matchesSm } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        className={
          matchesMd
            ? clsx(classes.itemContainer, classes.itemSpacing)
            : classes.itemContainer
        }
        md
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSm ? "center" : undefined}>
              Automation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : undefined}
            >
              Why waste time when you don’t have to?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : undefined}
            >
              We can help you identify processes with time or event based
              actions which can now easily be automated.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : undefined}
            >
              Increasing efficiency increases profits, leaving you more time to
              focus on your business, not busywork.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Animation
            animationData={automationAnimation}
            style={{ maxHeight: 290, maxWidth: 280 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        className={classes.itemContainer}
        md
      >
        <Grid item md>
          <Animation
            animationData={uiAnimation}
            style={{ maxHeight: 310, maxWidth: 155 }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSm ? "center" : "right"}>
              User Experience Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : "right"}
            >
              A good design that isn’t usable isn’t a good design.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : "right"}
            >
              So why are so many pieces of software complicated, confusing, and
              frustrating?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSm ? "center" : "right"}
            >
              By prioritizing users and the real ways they interact with
              technology we’re able to develop unique, personable experiences
              that solve problems rather than create new ones.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AutomationUIDesign;
