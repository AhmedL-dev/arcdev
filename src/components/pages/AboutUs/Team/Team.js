import React, { Fragment } from "react";

import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import profile from "../../../../assets/founder.jpg";
import yearbook from "../../../../assets/yearbook.svg";
import puppy from "../../../../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  teamBlock: {
    order: 1,
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      order: 2,
      marginBottom: "2.5em",
    },
  },
  teamImgs: {
    [theme.breakpoints.down("md")]: {
      maxHeight: 250,
    },
  },
  bioBlock: {
    maxWidth: "45em",
    padding: "1.25em",
    order: 2,
    [theme.breakpoints.down("md")]: {
      order: 1,
    },
  },
  pupBlock: {
    order: 3,
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const Team = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item>
        <Typography variant="h4" gutterBottom align="center">
          Team
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" paragraph align="center">
          Zachary Reece, Founder
        </Typography>
        <Typography variant="body1" paragraph align="center">
          I started coding when I was 9 years old.
        </Typography>
      </Grid>
      <Grid item>
        <Avatar alt="Founder" src={profile} className={classes.avatar} />
      </Grid>
      <Grid item container justify={matchesMd ? "center" : undefined}>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMd ? "center" : undefined}
          className={classes.teamBlock}
        >
          <Grid item>
            <img
              src={yearbook}
              alt="yearbook page about founder"
              className={classes.teamImgs}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              a page from sophomore yearbook
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg className={classes.bioBlock}>
          <Typography variant="body1" align="center" paragraph>
            I taught myself basic coding from a library book in third grade, and
            ever since then my passion has solely been set on learning —
            learning about computers, learning mathematics and philosophy,
            studying design, always just learning.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Now I’m ready to apply everything I’ve learned, and to help others
            with the intuition I have developed.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMd ? "center" : "flex-end"}
          className={classes.pupBlock}
        >
          <Grid item>
            <img
              src={puppy}
              alt="grey spotted puppy"
              className={classes.teamImgs}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              my miniature dapple dachshund, Sterling
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Team;
