import React from "react";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import CustomSoftware from "../Reusable/CustomSoftware/CustomSoftware";
import AppDevelopment from "../Reusable/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "../Reusable/WebsiteDevelopment/WebsiteDevelopment";

const useStyles = makeStyles((theme) => ({
  blockTop: {
    marginTop: "-5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-9em",
    },
  },
  blockBottom: {
    marginBottom: "10em",
  },
  headerTitle: {
    marginLeft: "5em",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
  },
}));

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.headerTitle}>
        <Typography
          align={matchesSm ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item className={classes.blockTop}>
        <CustomSoftware
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={true}
        />
      </Grid>
      <Grid item>
        <AppDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={false}
        />
      </Grid>
      <Grid item className={classes.blockBottom}>
        <WebsiteDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={true}
        />
      </Grid>
    </Grid>
  );
};

export default Services;
