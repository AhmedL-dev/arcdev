import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import Form from "./Form/Form";
import CallToAction from "./CallToAction/CallToAction";

import background from "../../../assets/background.jpg";
import mobileBackground from "../../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  formContainer: {
    marginBottom: 0,
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      marginBottom: "5em",
      marginTop: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
}));

const Contact = (props) => {
  const { setValue } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
        className={classes.formContainer}
      >
        <Form
          matchesMd={matchesMd}
          matchesXs={matchesXs}
          matchesSm={matchesSm}
        />
      </Grid>
      <Grid
        item
        container
        direction={matchesMd ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMd ? "center" : undefined}
      >
        <CallToAction matchesMd={matchesMd} setValue={setValue} theme={theme} />
      </Grid>
    </Grid>
  );
};

export default Contact;
