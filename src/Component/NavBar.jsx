import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Divider,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffff",
  },
  menu: {
    display: "flex",
  },

  menuItem: {
    justifyContent: "flex-end",
  },
  logo: {
    marginLeft: "5%",
    marginRight: "auto",
    fontWeight: "bold",
  },
  headline: {
    marginLeft: "5%",
    marginRight: "auto",
    fontWeight: "bold",
  },
  link: {
    marginRight: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  menuButton: {
    color: "#1e1e1e",
  },
  divider: {
    background: "#d71921",
    height: "2px",
    marginLeft: "5%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#d71921",
    "&:hover": {
      backgroundColor: "#d71921",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  active: {
    background: "#f4f4f4",
  },
}));

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Sport News", path: "/sport" },
  { name: "Tech News", path: "/tech" },
  { name: "Gallery", path: "/gallery" },
];

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [open, setopen] = useState(false);
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h4" color="primary" className={classes.logo}>
          <div
            style={{
              "border-radius": "5px",
              border: "5px solid #d71921",
              padding: "8px",
              marginTop: "5%",
            }}
          >
            අද
          </div>
          News
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
      <Divider className={classes.divider} />
      <Toolbar>
        <Typography variant="h9" color="primary" className={classes.headline}>
          HeadLines ...
        </Typography>

        {/* <Button color="primary">Login</Button> */}
        <Hidden xsDown>
          <Typography color="primary">
            <List className={classes.menu}>
              {navigationLinks.map((item) => (
                <ListItem
                  key={item.name}
                  color="primary"
                  button
                  onClick={() => history.push(item.path)}
                  className={
                    location.pathname == item.path ? classes.active : null
                  }
                >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
            </List>
            {/* {navigationLinks.map((item) => (
              <Link
                color="primary"
                href={item.href}
                underline="none"
                className={classes.link}
              >
                {item.name}
              </Link>
            ))} */}
          </Typography>
        </Hidden>
        <Hidden smUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={() => setopen(true)} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setopen(true)}
        onClose={() => setopen(false)}
      >
        <div>
          <IconButton>
            <ChevronRight onClick={() => setopen(false)} />
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <List>
          {navigationLinks.map((item) => (
            <ListItem>
              <Link
                color="primary"
                href={item.href}
                underline="none"
                className={classes.link}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
