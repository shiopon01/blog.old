import * as React from "react";
import Link from "next/link";
import Head from "next/head";

import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "./AppBar";
import Footer from "./Footer";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Shiopon Blog" }) => (
  <React.Fragment>
    <CssBaseline />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <AppBar />
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/initial-props">
          <a>Props</a>
        </Link>
      </nav>
    </header>
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
