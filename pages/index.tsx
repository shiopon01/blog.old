import * as React from "react";
// import Link from "next/link";
import TopLayout from "../src/components/TopLayout";
import { NextPage } from "next";
import {
  Typography,
  Link,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Hidden,
  Divider,
  CardMedia
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../src/components/Header";

const useStyles = makeStyles(theme => ({
  paddingLR0: {
    paddingLeft: 0,
    paddingRight: 0
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
  }
}));

const IndexPage: NextPage = () => {
  const classes = useStyles();
  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      title: "Post title",
      date: "Nov 11",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content."
    }
  ];

  const archives = [
    "March 2020",
    "February 2020",
    "January 2020",
    "December 2019",
    "November 2019",
    "October 2019",
    "September 2019",
    "August 2019",
    "July 2019",
    "June 2019",
    "May 2019",
    "April 2019"
  ];

  const social = ["GitHub", "Twitter", "Facebook"];

  return (
    <TopLayout title="Home">
      <Header />

      <Container>
        {/* Featured articles */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Featured articles
          </Typography>
          <Divider />
        </Grid>
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        {/* Latest articles */}
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Latest articles
            </Typography>
            <Divider />
            {/* {posts.map(post => (
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
              {post}
            </Markdown>
          ))} */}
          </Grid>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12}>
            {/* <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean
                lacinia bibendum nulla sed consectetur.
              </Typography>
            </Paper> */}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Archives
            </Typography>
            {archives.map(archive => (
              <Link display="block" variant="body1" href="#" key={archive}>
                {archive}
              </Link>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Social
            </Typography>
            {social.map(network => (
              <Link display="block" variant="body1" href="#" key={network}>
                {network}
              </Link>
            ))}
          </Grid>
          {/* End sidebar */}
        </Grid>

        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">Go home</Link>
        </p>
      </Container>
    </TopLayout>
  );
};

export default IndexPage;
