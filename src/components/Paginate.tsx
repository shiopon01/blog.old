import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paginate: {
    marginTop: 40
  }
}));

const Paginate = (props: any) => {
  const classes = useStyles();
  const list = [];

  for (let i = 0; i < props.max; i++) {
    list.push(<span key={i}>{i + 1}</span>);
  }

  return (
    <Grid container alignItems="center" justify="center" className={classes.paginate}>
      <Grid item md={4}>
        {1 < props.page && (
          <Typography color="inherit" align="center">
            ←
          </Typography>
        )}
      </Grid>
      <Grid item md={4}>
        <Typography color="inherit" align="center">
          {list}
        </Typography>
      </Grid>
      <Grid item md={4}>
        {props.page < props.max && (
          <Typography color="inherit" align="center">
            →
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Paginate;
