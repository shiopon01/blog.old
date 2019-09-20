import * as React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from 'react-markdown'
import { Grid } from "@material-ui/core";

import Layout from "../../src/components/Layout";
import { host } from "../../const";

interface Props {
  data?: {
    exists: boolean;
    title?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}

const EntryPage: NextPage<Props> = (props: any) => {
  return (
    <Layout title="Entry">
      <article>
        <Grid container>
          <Grid item xs={undefined} sm={1} />
          <Grid item xs={12} sm={10}>
            <section>
              <ReactMarkdown source={props.data.body}></ReactMarkdown>
            </section>
          </Grid>
        </Grid>
        <Grid item xs={undefined} sm={1} />
      </article>
    </Layout>
  );
};

EntryPage.getInitialProps = async (req: any) => {
  const key: string = req.query.entry as string;
  const res = await fetch(host + "/api/articles/" + key);
  const data = await res.json();
  return { data };
};

export default EntryPage;
