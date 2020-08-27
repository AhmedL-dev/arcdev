import React from "react";
import { Link } from "react-router-dom";

import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import infoBackground from "../../../../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginBottom: "1em",
    color: "white",
    borderColor: "white",
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  infoBlockLeft: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  infoBlockRight: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2em",
    },
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      textAlign: "center",
    },
  },
  infoTextBlock: {
    height: "60em",
  },
  infoHeader: {
    color: "white",
  },
  sectionMargin: {
    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10em",
    },
  },
}));

const InformationBlock = (props) => {
  const { matchesXS, setValue } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.infoTextBlock}
    >
      <Grid
        item
        container
        className={classes.infoBackground}
        direction={matchesXS ? "column" : "row"}
        alignItems={matchesXS ? undefined : "center"}
        justify={matchesXS ? "center" : undefined}
      >
        <Grid item sm className={classes.infoBlockLeft}>
          <Grid container direction="column" className={classes.sectionMargin}>
            <Typography variant="h2" className={classes.infoHeader}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal</Typography>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.infoBlockRight}>
          <Grid container direction="column">
            <Typography variant="h2" className={classes.infoHeader}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">
              Say hello!{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformationBlock;
