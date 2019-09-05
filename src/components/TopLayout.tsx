import * as React from "react";
import Head from "next/head";
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
    <main>{children}</main>
    <Footer />
  </React.Fragment>
);

export default Layout;
