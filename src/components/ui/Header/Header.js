import React, { Fragment } from "react";

import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ElevationScroll from "./HeaderBar/ElevationScroll/ElevationScroll";
import TabBar from "./HeaderBar/TabBar/TabBar";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <TabBar
              value={props.value}
              setValue={props.setValue}
              selectedIndex={props.selectedIndex}
              setSelectedIndex={props.setSelectedIndex}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
