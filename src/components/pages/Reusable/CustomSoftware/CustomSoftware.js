import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import customSoftwareIcon from "../../../../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginBottom: "1em",
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  serviceText: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      textAlign: "center",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
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

const CustomSoftware = (props) => {
  const { matchesSm, theme, setValue, setSelectedIndex, floatRight } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.serviceContainer}
      justify={matchesSm ? "center" : floatRight ? "flex-end" : undefined}
    >
      <Grid
        item
        className={
          floatRight
            ? classes.serviceText
            : clsx(classes.serviceText, classes.marginLeft)
        }
      >
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1">
          Save Energy. Save Time. Save Money.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Complete digital solutions, from investigation to{" "}
          <span className={classes.specialText}>celebration</span>.
        </Typography>
        <Button
          variant="outlined"
          className={classes.learnButton}
          component={Link}
          to="/customsoftware"
          onClick={() => {
            setValue(1);
            setSelectedIndex(1);
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
          alt="Custom Software Icon"
          src={customSoftwareIcon}
          className={
            floatRight ? clsx(classes.marginRight, classes.icon) : classes.icon
          }
          width="250em"
        />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
