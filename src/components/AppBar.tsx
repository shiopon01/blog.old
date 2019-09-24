import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
// }));

export default function MyAppBar() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Blog</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
