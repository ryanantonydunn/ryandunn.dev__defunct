import ReactMarkdown from "react-markdown";
import { getPost, getPosts } from "../../components/BlogPosts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
    <>
      <Header />
      <div style={{ height: 150 }} />
      <h2 className="text-4xl font-bold tracking-tight mb-4 text-center">
        {metaData.title}
      </h2>
      <div className="container ml-auto mr-auto">
        <ReactMarkdown source={body} />
      </div>

      <Footer />
    </>
  );
};

export default BlogTemplate;
