import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    cursor: "pointer"
  }
}));

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              SHIOPON BLOG
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default MyAppBar;
