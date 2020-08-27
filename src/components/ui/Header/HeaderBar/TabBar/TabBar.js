import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import TabLinks from "./TabLinks/TabLinks";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";
import SubMenu from "./SubMenu/SubMenu";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
}));

const TabBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const location = useLocation();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const drawerOpenHandler = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  const tabChangeHandler = useCallback((newValue) => setValue(newValue), [
    setValue,
  ]);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setMenuOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleMenuClick(event),
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    const pathName = location.pathname;

    [...menuOptions, ...routes].forEach((route) => {
      switch (pathName) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            tabChangeHandler(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          tabChangeHandler(false);
          break;
        default:
          break;
      }
    });
  }, [
    value,
    menuOptions,
    routes,
    selectedIndex,
    setSelectedIndex,
    tabChangeHandler,
    location,
  ]);

  const tabs = (
    <Fragment>
      <TabLinks
        tabValue={value}
        tabChangeHandler={tabChangeHandler}
        routes={routes}
      />
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setValue(false)}
      >
        Free Estimate
      </Button>
      <SubMenu
        anchorEl={anchorEl}
        menuOpen={menuOpen}
        handleMenuClose={handleMenuClose}
        menuOptions={menuOptions}
        handleMenuItemClick={handleMenuItemClick}
        selectedMenuIndex={selectedIndex}
        tabValue={value}
        tabChangeHandler={tabChangeHandler}
      />
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <ResponsiveDrawer
        drawerOpen={drawerOpen}
        drawerOpenHandler={drawerOpenHandler}
        tabChangeHandler={tabChangeHandler}
        routes={routes}
        tabValue={value}
      />
      <IconButton
        onClick={() => drawerOpenHandler(!drawerOpen)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <Logo clickToHome={tabChangeHandler} />
      {matches ? drawer : tabs}
    </Fragment>
  );
};

export default TabBar;
