import * as React from "react";
import { Grid, Typography, CardActionArea, Card, CardContent, Hidden, CardMedia } from "@material-ui/core";

import Layout from "../../src/components/Layout";

type Post = {
  title: string;
  date: string;
  description: string;
};

const featuredPosts: Post[] = [
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

const EntryPage: React.FunctionComponent = () => {
  return (
    <Layout title="Entry | Shiopon Blog">
      <main>
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <Card>
                  <div>
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
                    <CardMedia image="https://source.unsplash.com/random" title="Image title" />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </main>
    </Layout>
  );
};

export default EntryPage;
