import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import Layout from "./Layout";

const NarrowLayout: React.FC<any> = (props) => (
  <Layout {...props} >
    <Container>
      <Grid container>
        <Grid item xs={undefined} sm={1} />
        <Grid item xs={12} sm={10}>{props.children}</Grid>
        <Grid item xs={undefined} sm={1} />
      </Grid>
    </Container>
  </Layout>
);

export default NarrowLayout;