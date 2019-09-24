import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 500,
    [theme.breakpoints.down("xs")]: {
      height: 300
    }
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainBottom: {
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
    backgroundColor: "green"
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
        <Grid container>
          <Grid item md={12}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
                SHIOPON BLOG 👋
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.mainBottom}>
          <Grid container alignItems="center" justify="center" className={classes.bottomMenu}>
            <Grid item md={8}>
              <Typography color="inherit">
                @shiopon01 のブログです！
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}
