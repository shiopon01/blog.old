import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link as MLink } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function MyAppBar() {
  const classes = useStyles();

  const sections: string[] = [
    "about",
    "design",
    "culture",
    "business",
    "politics",
    "opinion",
    "science",
    "health",
    "style",
    "travel"
  ];

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Blog</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link href={section}>
            <MLink color="inherit" noWrap key={section} variant="body2" href="#" className={classes.toolbarLink}>
              {section}
            </MLink>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
