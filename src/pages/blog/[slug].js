import ReactMarkdown from "react-markdown";
import { getPosts, getPost } from "../../components/BlogPosts";
import Layout from "../../components/Layout";

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(({ metaData }) => `/blog/${metaData.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return { props: { ...post } };
};

const BlogTemplate = ({ body, metaData }) => {
  return (
    <Layout
      title={`${metaData.title} | Ryan Dunn`}
      description={metaData.description}
    >
      <h1>{metaData.title}</h1>
      <ReactMarkdown source={body} />
    </Layout>
  );
};

export default BlogTemplate;
