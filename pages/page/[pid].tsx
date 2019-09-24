import * as React from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@material-ui/core";

import TopLayout from "../../src/components/TopLayout";
import Header from "../../src/components/Header";
import { HOST } from "../../const";

const useStyles = makeStyles(theme => ({
  card: {
    // display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    marginTop: 20,
    height: 180,
    [theme.breakpoints.down("xs")]: {
      height: 100
    }
  },
  title: {
    borderBottom: "1px solid rgba(0,0,0,.05)"
  },
  col: {
    padding: "0 20px"
  },
  content: {
    padding: "20px 0",
    borderBottom: "1px solid rgba(0,0,0,.0785) !important"
  },
  readmore: {
    marginTop: 10
  },
  entryTitle: {
    marginTop: 20,
    fontSize: 30
  },
  entryBody: {
    fontSize: 24
  }
}));

const PagePage: NextPage = (props: any) => {
  const classes = useStyles();
  const { pid } = props;

  const list = [];
  for (const entry of props.data) {
    list.push(
      <Grid item xs={12} key={list.length} className={classes.content}>
        <Card className={classes.card} square={false} elevation={0}>
          <Link href={"/entry/" + entry.title}>
            <CardActionArea disableRipple={true}>
              <CardMedia className={classes.cardMedia} image={entry.image} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.entryTitle}>
                  {entry.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" className={classes.entryBody}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.readmore}>
                  Read more...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  return (
    <TopLayout title={`Page ${pid}`}>
      <Header />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} className={classes.col}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Latest Page {pid}
            </Typography>
            <Grid container>{list}</Grid>
          </Grid>
          <Grid item xs={12} md={4} className={classes.col}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              About
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </TopLayout>
  );
};

PagePage.getInitialProps = async (req: any) => {
  const pid: string = req.query.pid as string;
  const res = await fetch(HOST + "/api/articles?page=" + pid);
  const data = await res.json();
  return { pid, data };
};

export default PagePage;
