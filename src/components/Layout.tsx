import * as React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";

import AppBar from "./AppBar";
import Footer from "./Footer";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Shiopon Blog" }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <AppBar />
    <main>
      <Container>{children}</Container>
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
