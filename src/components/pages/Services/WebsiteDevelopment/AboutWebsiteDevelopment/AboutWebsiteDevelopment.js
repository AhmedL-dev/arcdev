import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Grid, IconButton, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import backArrow from "../../../../../assets/backArrow.svg";
import forwardArrow from "../../../../../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  backArrow: {
    marginTop: "0.5em",
    marginRight: "1em",
    marginLeft: "-3.5em",
  },
  forwardArrow: {
    marginTop: "0.5em",
    marginLeft: "-1em",
  },
  arrowBackground: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const AboutWebsiteDevelopment = (props) => {
  const { setSelectedIndex, matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden mdDown>
        <Grid item className={classes.backArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img src={backArrow} alt="Back to iOS/Android App Development" />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item container direction="column" className={classes.heading}>
        <Grid item>
          <Typography variant="h2" align={matchesMd ? "center" : undefined}>
            Website Development
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            Having a website is a necessity in today’s business world. They give
            you one central, public location to let people know who you are,
            what you do, and why you’re the best at it.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMd ? "center" : undefined}
          >
            From simply having your hours posted to having a full fledged online
            store, making yourself as accessible as possible to users online
            drives growth and enables you to reach new customers.
          </Typography>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.forwardArrow}>
          <IconButton
            className={classes.arrowBackground}
            component={Link}
            to="/services"
            onClick={() => setSelectedIndex(0)}
          >
            <img src={forwardArrow} alt="Forward to services" />
          </IconButton>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default AboutWebsiteDevelopment;
