import * as React from "react";
import Link from "next/link";
import Layout from "../../src/components/Layout";
import { NextPage } from "next";

const PagePage: NextPage = (props: any) => {
  const { pid } = props;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Page page</h1>
      <p>page</p>
      <p>
        <Link href="/">
          <a>{pid}</a>
        </Link>
      </p>
    </Layout>
  );
};

PagePage.getInitialProps = async (req: any) => {
  return { pid: req.query.pid };
};

export default PagePage;
