import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./Copyright";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <hr />
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Footer Message
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </React.Fragment>
  );
}
