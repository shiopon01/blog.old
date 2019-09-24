import * as React from "react";
import { Grid, Typography } from "@material-ui/core";

const Paginate = (props: any) => {
  const list = [];

  for (let i = 0; i < props.max; i++) {
    list.push(<span>{i + 1}</span>);
  }

  return (
    <Grid container alignItems="center" justify="center">
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
