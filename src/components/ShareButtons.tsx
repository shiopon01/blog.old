import React from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  PocketShareButton,
  PocketIcon
} from "react-share";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "right"
  },
  height: {
    height: "100%"
  },
  span: {
    margin: "0px 4px"
  },
  shareButton: {
    cursor: "pointer",
    display: "inline-block",
    "&:hover": {
      opacity: 0.75
    }
  }
}));

type Props = {
  url: string;
  title: string;
};

const ShareButtons: React.FC<Props> = ({ url, title }) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js"></script>
      </Head>
      <Grid container alignItems="center" justify="center" className={classes.height}>
        <Grid item xs={12}>
          <div className={classes.center}>
            <span className={classes.span}>
              <TwitterShareButton url={url} title={title + " | Shiopon Blog"} className={classes.shareButton}>
                <TwitterIcon size={30} />
              </TwitterShareButton>
            </span>
            <span className={classes.span}>
              <FacebookShareButton url={url} className={classes.shareButton}>
                <FacebookIcon size={30} />
              </FacebookShareButton>
            </span>
            <span className={classes.span}>
              <PocketShareButton url={url} className={classes.shareButton}>
                <PocketIcon size={30} />
              </PocketShareButton>
            </span>
            <span className={classes.span}>
              <a
                href="https://b.hatena.ne.jp/entry/"
                className="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic"
                data-hatena-bookmark-width="30"
                data-hatena-bookmark-height="30"
                title="このエントリーをはてなブックマークに追加"
              >
                <img
                  src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                  alt="このエントリーをはてなブックマークに追加"
                  width="20"
                  height="20"
                  style={{ border: "none" }}
                />
              </a>
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareButtons;
