import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import technologyAnimation from "../../../../animations/technologyAnimation/data.json";
import Animation from "../../../ui/Animation/Animation";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    maxWidth: "40em",
  },
}));

const Technology = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
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
            align={matchesMd ? "center" : undefined}
            gutterBottom
          >
            Technology
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMd ? "center" : undefined}
            paragraph
          >
            This puts personalization in your pocket — faster, better, and more
            affordable than ever before.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify={matchesMd ? "center" : "flex-end"} lg>
        <Animation
          animationData={technologyAnimation}
          style={{ maxWidth: "40em", margin: 0 }}
        />
      </Grid>
    </Fragment>
  );
};

export default Technology;
