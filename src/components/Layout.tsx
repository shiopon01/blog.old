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
  title?: string;
  pageType?: string;
};

const Layout: React.FC<Props> = ({ children, title = null, pageType = "website" }) => {
  const classes = useStyles();
  const pageTitle = (title != null ? title + " - " : "") + "Shiopon Blog";
  const pagePath = "";

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
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="Shiopon Blog" />
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={"https://blog.shiopon.net/" + pagePath} />
        <meta property="og:image" content="https://blog.shiopon.net/static/og.png" />
        <meta property="og:image:alt" content="https://blog.shiopon.net/static/icon.png" />
        <meta property="og:description" content="しおぽんのブログです。" />
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
