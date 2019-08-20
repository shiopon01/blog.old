import * as React from "react";
import Link from "next/link";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";

const PagePage: React.FunctionComponent = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>{pid}</a>
        </Link>
      </p>
    </Layout>
  );
};

export default PagePage;
