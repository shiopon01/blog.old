import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./Layout";

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
}));

const NarrowLayout: React.FC<any> = props => {
  const classes = useStyles();

  return (
    <Layout {...props}>
      <Container classes={{ root: classes.container }}>
        <Grid container>
          <Grid item xs={undefined} sm={1} />
          <Grid item xs={12} sm={10}>
            {props.children}
          </Grid>
          <Grid item xs={undefined} sm={1} />
        </Grid>
      </Container>
    </Layout>
  );
};

export default NarrowLayout;
