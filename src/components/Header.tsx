import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)"
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(/logo.png)",
    // backgroundSize: "cover",
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 500,
    [theme.breakpoints.down("xs")]: {
      height: 300
    }
  },
  mainBottom: {
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%"
  },
  bottomMenu: {
    height: "100%"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <div className={classes.mainBottom}>
          <Grid container alignItems="center" justify="center" className={classes.bottomMenu}>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={3} className={classes.center}>
                  <Typography color="inherit">SHIOPON BLOG</Typography>
                </Grid>
                <Grid item xs={3} className={classes.center}>
                  <Typography color="inherit">SHIOPON BLOG</Typography>
                </Grid>
                <Grid item xs={3} className={classes.center}>
                  <Typography color="inherit">SHIOPON BLOG</Typography>
                </Grid>
                <Grid item xs={3} className={classes.center}>
                  <Typography color="inherit">SHIOPON BLOG</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}
