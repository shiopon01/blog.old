// import { useRouter } from 'next/router';
import Layout from "../../src/components/Layout";

const Post = (props: any) => {
  // const router = useRouter();

  console.log(props.test);

  return (
    <Layout>
      <h1>{props.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

Post.getInitialProps = async (req: any) => {
  console.log(req.query);
  return {test: "Hello, World", id: req.query.id};
};

export default Post;