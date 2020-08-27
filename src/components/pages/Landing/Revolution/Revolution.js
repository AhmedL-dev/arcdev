import React from "react";
import { Link } from "react-router-dom";

import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import revolutionBackgroundRepeat from "../../../../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  textBlockAlign: {
    textAlign: "center",
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackgroundRepeat})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  cardGridContainer: {
    height: "70em",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0 8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
}));

const Revolution = (props) => {
  const { setValue } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.cardGridContainer}
    >
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container direction="column" className={classes.textBlockAlign}>
            <Grid item>
              <Typography variant="h3" gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Visionary insights couple with cutting-edge technology is a
                recipe for revolution.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={props.theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionBackground} />
    </Grid>
  );
};

export default Revolution;
