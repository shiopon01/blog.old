import React, { useEffect } from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { initGA, logPageView } from "../utils/analytics";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
}));

type Props = {
  type?: string; // "website" or "article"
  title?: string; // article title
  description?: string; // article description
  path?: string; // page path "entry/2020-..."
};

const Layout: React.FC<Props> = ({ children, type = "website", title = null, description = null, path = null }) => {
  const classes = useStyles();
  const pageTitle = (title != null ? title + " - " : "") + "Shiopon Blog";

  useEffect(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA();
      // @ts-ignore
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Head>
        <link rel="stylesheet" href="/static/font.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="Shiopon Blog" />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={"https://blog.shiopon.net/" + path} />
        <meta property="og:image" content="https://blog.shiopon.net/static/og.png" />
        <meta property="og:image:alt" content={pageTitle} />
        <meta property="og:description" content={description || "しおぽんのブログです。"} />
        <meta property="fb:app_id" content="460496401307779" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@shiopon01" />
        <meta name="twitter:creator" content="@shiopon01" />
      </Head>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
