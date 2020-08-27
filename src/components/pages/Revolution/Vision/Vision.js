import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import vision from "../../../../assets/vision.svg";

const useStyles = makeStyles((theme) => ({
  visionImage: {
    marginRight: "5em",
    maxWidth: 500,
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
  },
  contentContainer: {
    maxWidth: "40em",
  },
}));

const Vision = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item lg>
        <img
          src={vision}
          alt="mountain through binoculars"
          className={classes.visionImage}
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg
        className={classes.contentContainer}
      >
        <Grid item>
          <Typography
            variant="h4"
            align={matchesMd ? "center" : "right"}
            gutterBottom
          >
            Vision
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : "right"}
            paragraph
          >
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : "right"}
            paragraph
          >
            What once was confined to huge rooms and teams of engineers now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of everything we do.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : "right"}
            paragraph
          >
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration, and innovation.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : "right"}
            paragraph
          >
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : "right"}
            paragraph
          >
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture, and interests, helping
            them overcome life’s obstacles. Each project is a step towards that
            goal.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Vision;
