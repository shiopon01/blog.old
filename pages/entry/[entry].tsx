import * as React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardHeader, Avatar } from "@material-ui/core";

import Layout from "../../src/components/Layout";
import ShareButtons from "../../src/components/ShareButtons";
import { HOST } from "../../const";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 720,
    padding: "0px 20px",
    margin: "40px 0px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  article: {
  },
  title: {
    fontWeight: 400,
    fontFamily: "medium-content-title-font, serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40
    }
  },
  header: {
    fontWeight: 400,
    fontSize: 16
  },
  avatar: {
    backgroundColor: "red",
    width: 50,
    height: 50
  },
  headerImage: {
    width: "100%"
  },
  body: {
    // padding: "2rem",
    fontFamily: "medium-content-serif-font, serif",
    lineHeight: 1.58,
    color: "#1e1e1e",
    fontWeight: 400,
    letterSpacing: "-0.004em",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 21
    }
  },
  h1: {
    fontFamily: "medium-content-sans-serif-font, sans-serif",
    fontSize: 34,
    color: "rgba(0, 0, 0, .8)",
    lineHeight: "1.12",
    marginBottom: 0,
    fontWeight: 600
  },
  h2: {
    fontFamily: "medium-content-sans-serif-font, sans-serif",
    fontSize: 26,
    color: "rgba(0, 0, 0, .8)",
    lineHeight: 1.18,
    marginBottom: 0,
    fontWeight: 600
  },
  h3: {
    // TODO: ちゃんと設定する
    fontFamily: "medium-content-sans-serif-font, sans-serif",
    fontSize: 26,
    color: "rgba(0, 0, 0, .8)",
    lineHeight: 1.18,
    marginBottom: 0,
    fontWeight: 600
  }
}));

const EntryPage: NextPage<any> = (props: any) => {
  const classes = useStyles();

  const Heading = (props: any) => {
    const level = props.level;
    const tagName = `h${level}`;

    // NOTE: エラー回避のため雑: No index signature with a parameter of type 'string' was found on type 'Record<"title" | ...
    let className = classes.h1;
    switch (tagName) {
      case "h2":
        className = classes.h2;
        break;
      case "h3":
        className = classes.h3;
        break;
      default:
        break;
    }
    return React.createElement(tagName, { className }, props.children);
  };

  return (
    <Layout title="Entry">
      <Grid container className={classes.container}>
        <article className={classes.article}>
          <section>
            {/* タイトル */}
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title}>
                  {props.title}
                </Typography>
              </Grid>
            </Grid>
            {/* 投稿者情報 */}
            <Grid container>
              <Grid item xs={6}>
                <CardHeader
                  classes={{ title: classes.header, subheader: classes.header }}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      S
                    </Avatar>
                  }
                  title="shiopon01"
                  subheader={props.createdAt}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ShareButtons url={"http://example.com"} />
              </Grid>
            </Grid>
            {/* 画像 */}
            {/* <Grid container>
              <Grid item xs={12}>
                <img src={props.image} className={classes.headerImage} />
              </Grid>
            </Grid> */}
            {/* 記事 */}
            <Grid container>
              <Grid item xs={12}>
                <ReactMarkdown
                  className={classes.body}
                  source={props.body}
                  renderers={{
                    heading: Heading
                  }}
                ></ReactMarkdown>
              </Grid>
            </Grid>
          </section>
          <div>
            <ShareButtons url={"http://example.com"} />
          </div>
        </article>
      </Grid>
    </Layout>
  );
};

EntryPage.getInitialProps = async (req: any) => {
  const key: string = req.query.entry as string;
  const res = await fetch(HOST + "/api/articles/" + key);
  const data = await res.json();
  return { ...data };
};

export default EntryPage;
