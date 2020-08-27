import React from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const SubMenu = (props) => {
  const classes = useStyles();

  return (
    <Menu
      id="simple-menu"
      anchorEl={props.anchorEl}
      open={props.menuOpen}
      onClose={props.handleMenuClose}
      classes={{ paper: classes.menu }}
      MenuListProps={{ onMouseLeave: props.handleMenuClose }}
      elevation={0}
      style={{ zIndex: 1302 }}
      keepMounted
    >
      {props.menuOptions.map((option, i) => (
        <MenuItem
          key={`${option}${i}`}
          component={Link}
          to={option.link}
          classes={{ root: classes.menuItem }}
          onClick={(e) => {
            props.handleMenuItemClick(e, i);
            props.tabChangeHandler(1);
            props.handleMenuClose();
          }}
          selected={i === props.selectedMenuIndex && props.tabValue === 1}
        >
          {option.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SubMenu;
