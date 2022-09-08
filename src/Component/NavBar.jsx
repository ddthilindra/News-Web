import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  SwipeableDrawer,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffff",
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
  dividerColor:{
    backgroundColor:"#d71921"
  }
}));

const navigationLinks = [
  { name: "Top News", href: "" },
  { name: "Top News", href: "" },
  { name: "Top News", href: "" },
  { name: "Top News", href: "" },
];

export default function NavBar() {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" color="primary" className={classes.logo}>
          News
        </Typography>
      </Toolbar>
      <Divider   style={{ background: '#d71921',height:"2px",marginLeft:"5%" }}/>
      <Toolbar>
        <Typography variant="h6" color="primary" className={classes.headline}>
          HeadLines ...
        </Typography>
        
        {/* <Button color="primary">Login</Button> */}
        <Hidden xsDown>
          <Typography
            variant="button"
            color="primary"
            className={classes.menuItem}
          >
            {navigationLinks.map((item) => (
              <Link
                color="primary"
                href={item.href}
                underline="none"
                className={classes.link}
              >
                {item.name}
              </Link>
            ))}
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
        <Divider />
        <List></List>
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
      </SwipeableDrawer>
    </AppBar>
  );
}
