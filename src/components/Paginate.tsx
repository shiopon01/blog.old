import * as React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paginate: {
    marginTop: 40
  },
  center: {
    textAlign: "center"
  }
}));

const Paginate = (props: any) => {
  const classes = useStyles();
  const list = [];

  for (let i = 0; i < props.max; i++) {
    list.push(<span key={i}>{i + 1}</span>);
  }

  return (
    <Grid container alignItems="center" ="center" className={classes.paginate}>
      <Grid item md={4} className={classes.center}>
        {1 < props.page && (
          <a href={"/page/" + (Number(props.page) - 1)}>
            <Button variant="contained">←</Button>
          </a>
        )}
      </Grid>
      <Grid item md={4}>
        <Typography color="inherit" align="center">
          {list}
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.center}>
        {props.page < props.max && (
          <a href={"/page/" + (Number(props.page) + 1)}>
            <Button variant="contained">→</Button>
          </a>
        )}
      </Grid>
    </Grid>
  );
};

export default Paginate;
