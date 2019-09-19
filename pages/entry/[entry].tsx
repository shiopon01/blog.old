// import * as React from "react";
// import { Grid, Typography, CardActionArea, Card, CardContent, Hidden, CardMedia } from "@material-ui/core";

import Layout from "../../src/components/Layout";
// import { makeStyles } from "@material-ui/core/styles";

// import { NextPage } from "next";
// import { useRouter } from 'next/router';

// import fetch from "isomorphic-unfetch";

// const useStyles = makeStyles(theme => ({
//   typography: {
//     marginTop: "2em"
//   },
//   toolbar: {
//     borderBottom: `1px solid ${theme.palette.divider}`
//   },
//   toolbarTitle: {
//     flex: 1
//   },
//   toolbarSecondary: {
//     justifyContent: "space-between",
//     overflowX: "auto"
//   },
//   toolbarLink: {
//     padding: theme.spacing(1),
//     flexShrink: 0
//   },
//   mainFeaturedPost: {
//     position: "relative",
//     backgroundColor: theme.palette.grey[800],
//     color: theme.palette.common.white,
//     marginBottom: theme.spacing(4),
//     backgroundImage: "url(https://source.unsplash.com/user/erondu)",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center"
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: "rgba(0,0,0,.3)"
//   },
//   mainFeaturedPostContent: {
//     position: "relative",
//     padding: theme.spacing(3),
//     [theme.breakpoints.up("md")]: {
//       padding: theme.spacing(6),
//       paddingRight: 0
//     }
//   },
//   mainGrid: {
//     marginTop: theme.spacing(3)
//   },
//   card: {
//     display: "flex"
//   },
//   cardDetails: {
//     flex: 1
//   },
//   cardMedia: {
//     width: 160
//   },
//   markdown: {
//     ...theme.typography.body2,
//     padding: theme.spacing(3, 0)
//   },
//   sidebarAboutBox: {
//     padding: theme.spacing(2),
//     backgroundColor: theme.palette.grey[200]
//   },
//   sidebarSection: {
//     marginTop: theme.spacing(3)
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     marginTop: theme.spacing(8),
//     padding: theme.spacing(6, 0)
//   }
// }));

// interface Props {
//   data?: {
//     exists: boolean;
//     title?: string;
//     body?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//   };
// }

const EntryPage = (props: any) => {
  console.log(props);

  return (
    <Layout>
      <h1>{props.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
// }

// const EntryPage = (props: any) => {
//   console.log(props.entry);

//   return (
//     <Layout>
//       <h1>{props.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );

  // const router = useRouter();
  // console.log(useRouter());
  // const { entry } = router.query;

  // // const router = useRouter();
  // // const classes = useStyles();

  // console.log("enty", router, entry);

  // return (
  //   <Layout title="Entry | Shiopon Blog">
  //     <article>
  //       {/* <Grid container>
  //         <Grid item xs={undefined} sm={1} />
  //         <Grid item xs={12} sm={10}>
  //           <section>
  //             <div>
  //               <Typography component="h1" variant="h3" gutterBottom>
  //                 記事タイトル
  //               </Typography>
  //               <Typography variant="h5">記事注釈情報</Typography>
  //             </div>
  //             <div>
  //               <Typography className={classes.typography}>どうもどうもどうもどうも</Typography>
  //               <Typography className={classes.typography}>どうも</Typography>
  //               <Typography className={classes.typography}>どうも</Typography>
  //               <Typography className={classes.typography}>どうも</Typography>
  //               <div>
  //                 <CardActionArea component="a" href="#">
  //                   <Card className={classes.card}>
  //                     <div className={classes.cardDetails}>
  //                       <CardContent>
  //                         <Typography component="h2" variant="h5">
  //                           title
  //                         </Typography>
  //                         <Typography variant="subtitle1" color="textSecondary">
  //                           date
  //                         </Typography>
  //                         <Typography variant="subtitle1" paragraph>
  //                           description
  //                         </Typography>
  //                         <Typography variant="subtitle1" color="primary">
  //                           Continue reading...
  //                         </Typography>
  //                       </CardContent>
  //                     </div>
  //                     <Hidden xsDown>
  //                       <CardMedia
  //                         className={classes.cardMedia}
  //                         image="https://source.unsplash.com/random"
  //                         title="Image title"
  //                       />
  //                     </Hidden>
  //                   </Card>
  //                 </CardActionArea>
  //               </div>
  //             </div>
  //             <Typography className={classes.typography}>どうも</Typography>
  //           </section>
  //         </Grid>
  //       </Grid>
  //       <Grid item xs={undefined} sm={1} /> */}
  //     </article>
  //   </Layout>
  // );
};

EntryPage.getInitialProps = async (req: any) => {
  console.log(req.query);
  return {date: {test: "Hello, World", entry: req.query.entry}};
};

// EntryPage.getInitialProps = async _req => {

//   // const key: string = req.query.entry as string;

//   // // console.log("key: ", router.query.entry + ".md");
//   // console.log(req.query);

//   const res = await fetch("http://localhost:3000/api/article/test");
//   const data = await res.json();

//   // console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     data: data
//   };
// };

export default EntryPage;
