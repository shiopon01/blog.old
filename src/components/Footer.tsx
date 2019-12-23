import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiTwitter, mdiFacebookBox, mdiInstagram, mdiGithubCircle, mdiLinkedinBox } from "@mdi/js";

import Copyright from "./Copyright";

const useStyles = makeStyles(theme => ({
  footer: {
    color: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    marginTop: "auto",
    padding: theme.spacing(6, 0)
  }
}));

function MarginHorizonIcon(props: any) {
  return (
    <span style={{ margin: "0 10px" }}>
      <a href={props.url} target="_blank">
        <Icon path={props.path} size={1} color="white" />
      </a>
    </span>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={6}>
              <Copyright />
            </Grid>
            <Grid item xs={6}>
              <Typography align="center">
                <MarginHorizonIcon path={mdiLinkedinBox} url="https://linkedin.com/in/shion-ueda-613743156" />
                <MarginHorizonIcon path={mdiFacebookBox} url="https://facebook.com/shiopon.ueda" />
                <MarginHorizonIcon path={mdiGithubCircle} url="https://github.com/shiopon01" />
                <MarginHorizonIcon path={mdiTwitter} url="https://twitter.com/@shiopon01" />
                <MarginHorizonIcon path={mdiInstagram} url="https://www.instagram.com/shiopon_u/" />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </React.Fragment>
  );
}
