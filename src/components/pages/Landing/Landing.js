import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import HeroBlock from "./HeroBlock/HeroBlock";
import CustomSoftware from "../Reusable/CustomSoftware/CustomSoftware";
import AppDevelopment from "../Reusable/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "../Reusable/WebsiteDevelopment/WebsiteDevelopment";
import Revolution from "./Revolution/Revolution";
import InformationBlock from "./InformationBlock/InformationBlock";
import CallToAction from "../Reusable/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

const Landing = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <HeroBlock theme={theme} setValue={setValue} />
      </Grid>
      <Grid item>
        <CustomSoftware
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={false}
        />
      </Grid>
      <Grid item>
        <AppDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={true}
        />
      </Grid>
      <Grid item>
        <WebsiteDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={false}
        />
      </Grid>
      <Grid item>
        <Revolution theme={theme} setValue={setValue} />
      </Grid>
      <Grid item>
        <InformationBlock matchesXS={matchesXS} setValue={setValue} />
      </Grid>
      <Grid item>
        <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Landing;
