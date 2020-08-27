import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  ctaContentContainer: {
    marginLeft: "3em",
    textAlign: "inherit",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },
  learnButtonSpan: {
    marginRight: 5,
  },
  subTitle2: {
    fontSize: "1.5rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = (props) => {
  const { matchesMd, setValue, theme } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.ctaContentContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" align={matchesMd ? "center" : undefined}>
              Simple Software,
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.subTitle2}
              align={matchesMd ? "center" : undefined}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid container justify={matchesMd ? "center" : undefined} item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          to="/estimate"
          onClick={() => setValue(false)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Fragment>
  );
};

export default CallToAction;
