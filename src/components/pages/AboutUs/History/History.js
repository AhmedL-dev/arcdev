import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import history from "../../../../assets/history.svg";

const useStyles = makeStyles((theme) => ({
  historyTextBlock: {
    maxWidth: "35em",
  },
  newKidText: {
    fontWeight: 700,
    fontStyle: "italic",
  },
  historyImg: {
    maxHeight: "22em",
    [theme.breakpoints.down("md")]: {
      maxHeight: 200,
    },
  },
}));

const History = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item>
        <Grid
          item
          container
          direction="column"
          lg
          className={classes.historyTextBlock}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMd ? "center" : undefined}
            >
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              className={classes.newKidText}
              align={matchesMd ? "center" : undefined}
            >
              We’re the new kid on the block.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMd ? "center" : undefined}
            >
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMd ? "center" : undefined}
            >
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMd ? "center" : undefined}
            >
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMd ? "center" : undefined}
            >
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={history}
            alt="quill pen sitting on a book"
            className={classes.historyImg}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default History;
