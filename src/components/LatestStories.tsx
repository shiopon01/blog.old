import * as React from "react";
import { Typography, Grid, Card, CardContent, Divider, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1032,
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    padding: "0 20px"
  },
  articles: {
    marginTop: 10
  },
  flex: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  cardMedia: {
    height: 160
  },
  content: {
    padding: "20px 0",
    borderBottom: "1px solid rgba(0,0,0,.0785) !important"
  },
  topCardMedia: {
    [theme.breakpoints.down("xs")]: {
      height: 160
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      maxHeight: 400
    }
  },
  img: {
    width: "100%",
    height: "100%"
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
    const cardContent = (
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
    );

    if (isFirst) {
      isFirst = false;
      list.push(
        <Grid item key={article.title} xs={12}>
          <a href={"/entry/" + article.path} style={{ textDecoration: "none" }}>
            <Card className={classes.flex}>
              <div className={classes.topCardMedia}>
                <CardMedia component="img" className={classes.img} image={article.image || "/static/noimage.jpg"} />
              </div>
              {cardContent}
            </Card>
          </a>
        </Grid>
      );
    } else {
      list.push(
        <Grid item key={article.title} xs={12} sm={4}>
          <a href={"/entry/" + article.path} style={{ textDecoration: "none" }}>
            <Card>
              <div className={classes.cardMedia}>
                <CardMedia component="img" className={classes.img} image={article.image || "/static/noimage.jpg"} />
              </div>
              {cardContent}
            </Card>
          </a>
        </Grid>
      );
    }
  }

  return (
    <Grid container className={classes.container}>
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
