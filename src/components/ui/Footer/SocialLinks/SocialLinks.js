import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import facebook from "../../../../assets/facebook.svg";
import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("xs")]: {
      width: "1.5em",
      height: "1.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-3em",
    right: "1em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2.5em",
      right: "0.6em",
    },
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="flex-end"
      className={classes.socialContainer}
      spacing={2}
    >
      <Grid
        item
        component={"a"}
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="facebook Logo" src={facebook} className={classes.icon} />
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="twitter Logo" src={twitter} className={classes.icon} />
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="instagram Logo" src={instagram} className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
