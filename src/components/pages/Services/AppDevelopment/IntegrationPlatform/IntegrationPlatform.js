import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";

import integrationAnimation from "../../../../../animations/integrationAnimation/data.json";
import Animation from "../../../../ui/Animation/Animation";

const IntegrationPlatform = (props) => {
  const { matchesSm } = props;

  return (
    <Fragment>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography
            variant="h4"
            align={matchesSm ? "center" : undefined}
            gutterBottom
          >
            Integration
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            Our technology enables an innate interconnection between web and
            mobile applications, putting everything you need right in one
            convenient place.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : undefined}
          >
            This allows you to extend your reach, reinvent interactions, and
            develop a stronger relationship with your users than ever before.
          </Typography>
        </Grid>
      </Grid>
      <Grid item md>
        <Animation
          animationData={integrationAnimation}
          style={{ maxWidth: "20em" }}
        />
      </Grid>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography
            variant="h4"
            align={matchesSm ? "center" : "right"}
            gutterBottom
          >
            Simultaneous Platform Support
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : "right"}
          >
            Our cutting-edge development process allows us to create apps for
            iPhone, Android, and tablets — all at the same time.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSm ? "center" : "right"}
          >
            This significantly reduces costs and creates a more unified brand
            experience across all devices.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default IntegrationPlatform;
