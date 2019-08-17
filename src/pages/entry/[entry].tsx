import * as React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const EntryPage: React.FunctionComponent = () => {
  const router = useRouter();
  const { entry } = router.query;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>entry</h1>
      <p>entry Page!!</p>
      <p>
        <Link href="/">
          <a>{entry}</a>
        </Link>
      </p>
    </Layout>
  );
};

export default EntryPage;
