import * as React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardHeader, Avatar } from "@material-ui/core";

import Layout from "../../src/components/Layout";
import { HOST } from "../../const";

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 20
  },
  avatar: {
    backgroundColor: "red"
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
    fontSize: 20
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
  h3: { // TODO: ちゃんと設定する
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
      <article>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <section>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  <Typography variant="h3">{props.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                      </Avatar>
                    }
                    title="shiopon01"
                    subheader={props.createdAt}
                  />
                </Grid>
                <Grid item xs={12}>
                  <img src={props.image} className={classes.headerImage} />
                </Grid>
              </Grid>

              <ReactMarkdown
                className={classes.body}
                source={props.body}
                renderers={{
                  heading: Heading
                }}
              ></ReactMarkdown>
            </section>
          </Grid>
        </Grid>
      </article>
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
