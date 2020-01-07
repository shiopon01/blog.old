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
    width: "100%"
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 30
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40
    }
  },
  header: {
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
    lineHeight: 1.58,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 21
    }
  },
  h1: {
    fontSize: 34,
    lineHeight: 1.12,
    marginTop: "1.95em",
    marginBottom: "-0.28em",
    fontWeight: 600
  },
  h2: {
    fontSize: 26,
    lineHeight: 1.18,
    marginTop: "1.72em",
    marginBottom: "-0.31em",
    fontWeight: 600
  },
  h3: {
    // TODO: ちゃんと設定する
    fontSize: 26,
    lineHeight: 1.18,
    marginBottom: 0,
    fontWeight: 600
  },
  firstParagraph: {
    marginTop: "0.86em",
    marginBottom: "-0.46em"
  },
  paragraph: {
    marginTop: "2em",
    marginBottom: "-0.46em"
  },
  list: {
    margin: 0
  },
  firstListItem: {
    marginTop: "0.86em",
    marginBottom: "-0.46em"
  },
  centerListItem: {
    marginTop: "2em",
    marginBottom: "-0.46em"
  },
  listItem: {
    marginTop: "1.05em",
    marginBottom: "-0.46em"
  },
  bottom: {
    marginTop: 40,
    width: "100%"
  }
}));

const EntryPage: NextPage<any> = (props: any) => {
  const classes = useStyles();
  let isFirstP = false;
  let isFirstListItem = true;

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

    isFirstP = true;
    return React.createElement(tagName, { className }, props.children);
  };

  const Paragraph = (props: any) => {
    const tagName = "p";
    let className = classes.paragraph;
    if (isFirstP) {
      className = classes.firstParagraph;
    }

    isFirstP = false;
    return React.createElement(tagName, { className }, props.children);
  };

  const List = (props: any) => {
    const tagName = props.ordered ? "ol" : "ul";
    const className = classes.list;
    isFirstListItem = true;
    return React.createElement(tagName, { className }, props.children);
  };

  const ListItem = (props: any) => {
    const tagName = "li";
    let className = classes.listItem;

    if (isFirstListItem && isFirstP) {
      className = classes.firstListItem;
    }
    if (isFirstListItem && !isFirstP) {
      className = classes.centerListItem;
    }

    isFirstP = false;
    isFirstListItem = false;
    return React.createElement(tagName, { className }, props.children);
  };

  return (
    <Layout title={props.title}>
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
              <Grid item xs={6} sm={6}>
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
                <ShareButtons url={"https://blog.shiopon.net/entry/" + props.path} title={props.title} />
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
                    heading: Heading,
                    paragraph: Paragraph,
                    list: List,
                    listItem: ListItem
                  }}
                ></ReactMarkdown>
              </Grid>
            </Grid>
          </section>
        </article>
        <div className={classes.bottom}>
          <Grid container>
            <Grid item xs={12}>
              <ShareButtons url={"https://blog.shiopon.net/entry/" + props.path} title={props.title} />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Layout>
  );
};

EntryPage.getInitialProps = async (req: any) => {
  if (process.browser) {
    // @ts-ignore
    return __NEXT_DATA__.props.pageProps;
  }

  const key: string = req.query.entry as string;
  const res = await fetch(HOST + "/api/articles/" + key);
  const data = await res.json();
  return { ...data };
};

export default EntryPage;
