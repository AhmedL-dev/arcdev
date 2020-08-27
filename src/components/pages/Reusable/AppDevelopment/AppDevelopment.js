import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import mobileAppsIcon from "../../../../assets/mobileIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  appDevContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  appDevText: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      textAlign: "center",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  marginRight: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  marginLeft: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

const AppDevelopment = (props) => {
  const { matchesSm, theme, setValue, setSelectedIndex, floatRight } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.appDevContainer}
      justify={matchesSm ? "center" : floatRight ? "flex-end" : undefined}
    >
      <Grid
        item
        className={
          floatRight
            ? classes.appDevText
            : clsx(classes.appDevText, classes.marginLeft)
        }
      >
        <Typography variant="h4">iOS/Android App Development</Typography>
        <Typography variant="subtitle1">
          Extend Functionality. Extend Access. Increase Engagement.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Integrate your web experience or create a standalone app
          {matchesSm ? null : <br />} with either mobile platform.
        </Typography>
        <Button
          variant="outlined"
          className={classes.learnButton}
          component={Link}
          to="/mobileapps"
          onClick={() => {
            setValue(1);
            setSelectedIndex(2);
          }}
        >
          <span className={classes.learnButtonSpan}>Learn More</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <img
          alt="Mobile phone icon"
          src={mobileAppsIcon}
          className={
            floatRight ? clsx(classes.marginRight, classes.icon) : classes.icon
          }
          width="250em"
        />
      </Grid>
    </Grid>
  );
};

export default AppDevelopment;
