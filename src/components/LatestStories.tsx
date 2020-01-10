import * as React from "react";
import { Typography, Grid, CardActionArea, Card, CardContent, Divider, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    padding: "0 20px"
  },
  articles: {
    marginTop: 10
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    height: 160
  },
  content: {
    padding: "20px 0",
    borderBottom: "1px solid rgba(0,0,0,.0785) !important"
  },
  topCardMedia: {
    width: "50%"
  }
}));

type Props = {
  articles: any;
};

const LatestStories: React.FC<Props> = ({ articles }) => {
  const classes = useStyles();

  let isFirst = true;
  const list = [];
  for (const article of articles) {
    if (isFirst) {
      isFirst = false;
      list.push(
        <Grid item key={article.title} xs={12}>
          <CardActionArea component="a" href={"/entry/" + article.path}>
            <Card className={classes.card}>
              <CardMedia className={classes.topCardMedia} image={article.image} />
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {article.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {article.createdAt}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {article.subtitle}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Read more...
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
      );
    } else {
      list.push(
        <Grid item key={article.title} xs={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea component="a" href={"/entry/" + article.path}>
              <CardMedia className={classes.cardMedia} image={article.image} title="Image title" />
              {/* <div className={classes.cardDetails}> */}
              <CardContent>
                <Typography component="h2" variant="h5">
                  {article.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {article.createdAt}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {article.subtitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Read more...
                </Typography>
              </CardContent>
              {/* </div> */}
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h6" gutterBottom>
          Latest articles
        </Typography>
        <Divider />
        <Grid container spacing={4} className={classes.articles}>
          {list}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestStories;
