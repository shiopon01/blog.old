import * as React from "react";
import Link from "next/link";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";

import unified from "unified";
import parse from "remark-parse";
const remark2react = require("remark-react");

const EntryPage: React.FunctionComponent = () => {
  const router = useRouter();
  const { entry } = router.query;

  const rawMarkdownBody: string = `# Header
Merkdown1\n
Markdown2`;

  return (
    <Layout title="Entry | Shiopon Blog">
      <h1>entry</h1>
      <p>entry Page!!</p>
      <p>
        <Link href="/">
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(rawMarkdownBody).contents
          }
          <a>{entry}</a>
        </Link>
      </p>
    </Layout>
  );
};

export default EntryPage;
