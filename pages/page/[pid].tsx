import * as React from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Link from 'next/link'

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardActionArea, Card, CardContent, Hidden, CardMedia } from "@material-ui/core";

import Layout from "../../src/components/Layout";
import { HOST } from "../../const";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

const PagePage: NextPage = (props: any) => {
  const classes = useStyles();
  const { pid } = props;

  const list = [];
  for (const entry of props.data) {
    list.push(
      <Grid item xs={12} key={list.length}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {entry.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {entry.createdAt}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                <Link href={"/entry/" + entry.title}>
                  <a>
                    Continue reading...
                  </a>
                </Link>
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={entry.image} title="Image title" />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }

  return (
    <Layout title={`Page ${pid}`}>
      <h1>記事一覧 {pid}</h1>
      <Grid container>
        {list}
      </Grid>
    </Layout>
  );
};

PagePage.getInitialProps = async (req: any) => {
  const pid: string = req.query.pid as string;
  const res = await fetch(HOST + "/api/articles?page=" + pid);
  const data = await res.json();
  return { pid, data };
};

export default PagePage;
