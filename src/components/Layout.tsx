import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import TopLayout from "./TopLayout";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = undefined }) => (
  <TopLayout title={title}>
    <Container>
      <Grid container>
        <Grid item xs={undefined} sm={1} />
        <Grid item xs={12} sm={10}>{children}</Grid>
        <Grid item xs={undefined} sm={1} />
      </Grid>
    </Container>
  </TopLayout>
);

export default Layout;
