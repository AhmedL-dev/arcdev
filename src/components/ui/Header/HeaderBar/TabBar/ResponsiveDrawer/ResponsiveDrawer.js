import React from "react";
import { Link } from "react-router-dom";

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={props.drawerOpen}
      onClose={() => props.drawerOpenHandler(false)}
      onOpen={() => props.drawerOpenHandler(true)}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.toolbarMargin}></div>
      <List disablePadding>
        {props.routes.map((route, i) => (
          <ListItem
            key={`${route}${i}`}
            divider
            button
            component={Link}
            to={route.link}
            onClick={() => {
              props.drawerOpenHandler(false);
              props.tabChangeHandler(route.activeIndex);
            }}
            selected={props.tabValue === route.activeIndex}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              {route.name}
            </ListItemText>
          </ListItem>
        ))}
        <ListItem
          divider
          button
          component={Link}
          to="/estimate"
          onClick={() => {
            props.drawerOpenHandler(false);
            props.tabChangeHandler(5);
          }}
          classes={{
            root: classes.drawerItemEstimate,
            selected: classes.drawerItemSelected,
          }}
          selected={props.tabValue === 5}
        >
          <ListItemText disableTypography className={classes.drawerItem}>
            Free Estimate
          </ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default ResponsiveDrawer;
