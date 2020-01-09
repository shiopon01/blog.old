import * as React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import { NextPage } from "next";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import LatestStories from "../src/components/LatestStories";
import { HOST } from "../const";

const useStyles = makeStyles(() => ({
  parent: {
    height: 120,
    position: "relative"
  },
  inner: {
    width: 150,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)"
  }
}));

const IndexPage: NextPage = (props: any) => {
  const classes = useStyles();

  return (
    <Layout>
      <Header />

      <Grid container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <LatestStories articles={props.articles} />
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>

      <Grid container alignItems="center" justify="center">
        <div className={classes.parent}>
          <a href={"/page/1"}>
            <Button variant="contained" className={classes.inner}>
              記事一覧
            </Button>
          </a>
        </div>
      </Grid>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  if (process.browser) {
    // @ts-ignore
    return __NEXT_DATA__.props.pageProps;
  }

  const response = await fetch(HOST + "/api/articles?page=1");
  const result = await response.json();
  return { articles: result.articles };
};

export default IndexPage;
