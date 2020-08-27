import React from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

const TabLinks = (props) => {
  const classes = useStyles();

  const tabChangeHandler = (e, newValue) => {
    props.tabChangeHandler(newValue);
  };

  return (
    <Tabs
      value={props.tabValue}
      onChange={tabChangeHandler}
      className={classes.tabContainer}
      indicatorColor="primary"
    >
      {props.routes.map((route, i) => (
        <Tab
          key={i}
          className={classes.tab}
          component={Link}
          to={route.link}
          label={route.name}
          aria-owns={route.ariaOwns}
          aria-haspopup={route.ariaPopup}
          onMouseOver={route.mouseOver}
        />
      ))}
    </Tabs>
  );
};

export default TabLinks;
