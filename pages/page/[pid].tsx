import * as React from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Link from 'next/link'

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardActionArea, Card, CardContent, Hidden, CardMedia } from "@material-ui/core";

import Layout from "../../src/components/Layout";

const useStyles = makeStyles(theme => ({
  typography: {
    marginTop: "2em"
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const PagePage: NextPage = (props: any) => {
  const classes = useStyles();
  const { pid } = props;

  const list = [];
  for (const entry of props.data) {
    list.push(
      <Grid item xs={12}>
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
      <h1>Page page {pid}</h1>
      <Grid container>
        {list}
      </Grid>
    </Layout>
  );
};

PagePage.getInitialProps = async (req: any) => {
  const pid: string = req.query.pid as string;
  const res = await fetch("http://localhost:3000/api/articles?page=" + pid);
  const data = await res.json();
  return { pid, data };
};

export default PagePage;
