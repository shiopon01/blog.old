import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import Layout from "./Layout";

type Props = {
  title?: string;
};

const NarrowLayout: React.FunctionComponent<Props> = ({ children, title = undefined }) => (
  <Layout title={title}>
    <Container>
      <Grid container>
        <Grid item xs={undefined} sm={1} />
        <Grid item xs={12} sm={10}>{children}</Grid>
        <Grid item xs={undefined} sm={1} />
      </Grid>
    </Container>
  </Layout>
);

export default NarrowLayout;