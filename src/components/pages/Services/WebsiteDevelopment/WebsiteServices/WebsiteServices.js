import React, { Fragment } from "react";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import chart from "../../../../../assets/analytics.svg";
import seo from "../../../../../assets/seo.svg";
import outreach from "../../../../../assets/outreach.svg";
import ecommerce from "../../../../../assets/ecommerce.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    marginTop: "15em",
  },
  rowContainerBottom: {
    marginBottom: "15em",
  },
  spyGlassNegative: {
    marginLeft: "-2.5em",
  },
  imageMargin: {
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const WebsiteServices = (props) => {
  const { matchesSm } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSm ? "center" : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={chart}
                alt="Website analytics chart"
                className={classes.spyGlassNegative}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={clsx(classes.paragraphContainer, classes.imageMargin)}
        >
          <Typography variant="body1" align={matchesSm ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="E-commerce" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={clsx(classes.paragraphContainer, classes.imageMargin)}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSm ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="Outreach megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={clsx(classes.paragraphContainer, classes.imageMargin)}
        >
          <Typography variant="body1" align={matchesSm ? "center" : undefined}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={clsx(classes.rowContainer, classes.rowContainerBottom)}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={clsx(classes.paragraphContainer, classes.imageMargin)}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            If you’re like us, probably never.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default WebsiteServices;
