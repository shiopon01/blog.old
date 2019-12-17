import * as React from "react";
import Head from "next/head";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>{title !== undefined ? title + " | " : ""}Shiopon Blog</title>
      </Head>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
