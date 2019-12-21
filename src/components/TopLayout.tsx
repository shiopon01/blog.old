import React, { useEffect } from "react";
import Head from "next/head";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

import { initGA, logPageView } from "../utils/analytics";

type Props = {
  title?: string;
};

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
}));

const Layout: React.FunctionComponent<Props> = ({ children, title = undefined }) => {
  const classes = useStyles();

  useEffect(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA()
      // @ts-ignore
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>{title !== undefined ? title + " | " : ""}Shiopon Blog</title>
        <link type="text/css" href="/static/font.css" />
      </Head>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
