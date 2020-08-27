import React, { Fragment } from "react";
import clsx from "clsx";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AboutCustomSoftware from "./AboutCustomSoftware/AboutCustomSoftware";
import Icons from "./Icons/Icons";
import DigitalDocumentsScale from "./DigitalDocumentsScale/DigitalDocumentsScale";
import RootCauseAnalysis from "./RootCauseAnalysis/RootCauseAnalysis";
import AutomationUIDesign from "./AutomationUIDesign/AutomationUIDesign";
import CallToAction from "../../Reusable/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
  headerSpacing: {
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  containerSpacing: {
    marginTop: "10em",
  },
  preCTASpacing: {
    marginBottom: "10em",
  },
}));

const CustomSoftware = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Grid container direction="column" wrap="nowrap">
        <Grid
          item
          container
          direction="row"
          justify={matchesMd ? "center" : undefined}
          className={clsx(classes.rowContainer, classes.headerSpacing)}
        >
          <AboutCustomSoftware
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            matchesMd={matchesMd}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={clsx(classes.containerSpacing, classes.rowContainer)}
        >
          <Icons matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify="space-between"
          className={clsx(classes.containerSpacing, classes.rowContainer)}
        >
          <DigitalDocumentsScale matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          className={clsx(classes.containerSpacing, classes.rowContainer)}
          wrap="nowrap"
        >
          <RootCauseAnalysis matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify="space-between"
          className={clsx(
            classes.containerSpacing,
            classes.rowContainer,
            classes.preCTASpacing
          )}
        >
          <AutomationUIDesign matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
      </Grid>
    </Fragment>
  );
};

export default CustomSoftware;
