import ReactMarkdown from "react-markdown";
import { getPost, getPosts } from "../../components/BlogPosts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import format from "date-fns/format";
import { MdDateRange, MdTimer } from "react-icons/md";

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

const renderParagraph = ({ children }) =>
  children?.length === 1 && children[0].props.src ? (
    <div className="img">{children}</div>
  ) : (
    <p>{children}</p>
  );

const BlogTemplate = ({ body, metaData }) => {
  return (
    <>
      <Header />
      <div style={{ height: 120 }} />
      <div
        className="container ml-auto mr-auto text-lg mb-16"
        style={{ maxWidth: 720 }}
      >
        <article className="article">
          <div className="pl-8 pr-8 mb-10">
            <h1 className="text-4xl mb-2 tracking-tight font-bold">
              {metaData.title}
            </h1>
            <div className="text-gray-500 mb-5 flex items-center uppercase text-sm">
              <span className="text-gray-700">
                {format(new Date(metaData.date), "MMMM d, yyyy")}
              </span>
              <div className="w-2" />/<div className="w-2" />5 min read
            </div>
          </div>
          <div
            className="w-full bg-purple-400 mb-10"
            style={{ paddingBottom: "40%" }}
          ></div>

          <ReactMarkdown
            source={body}
            renderers={{
              paragraph: renderParagraph,
            }}
          />
        </article>
      </div>

      <Footer />
    </>
  );
};

export default BlogTemplate;
