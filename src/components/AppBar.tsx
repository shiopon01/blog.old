import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#fff"
  },
  logo: {
    // TODO:
  }
}));

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar classes={{root: classes.appbar}}>
        <Toolbar>
          <a href="/">
            <img src="/logo.png" className={classes.logo} />
          </a>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default MyAppBar;
