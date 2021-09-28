import ReactMarkdown from "react-markdown";
import { PrismAsync } from "react-syntax-highlighter";
import {
  ArticleMeta,
  getArticle,
  getArticles,
} from "../../components/article-list/ArticleList";
import Author from "../../components/author/Author";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Meta from "../../components/meta/Meta";
import Share from "../../components/share/Share";
import vscDarkPlus from "../../utils/vsc-dark-plus";

export const getStaticPaths = async () => {
  const articles = await getArticles();
  const paths = articles.map(({ metaData }) => `/blog/${metaData.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const article = await getArticle(params.slug);
  return { props: { ...article } };
};

const renderParagraph = ({ children }) =>
  children?.length && children[0].props.src ? (
    <div className="img">{children}</div>
  ) : (
    <p>{children}</p>
  );

const renderCode = ({ language, value }) => (
  <PrismAsync language={language} style={vscDarkPlus}>
    {value}
  </PrismAsync>
);

const BlogTemplate = ({ body, metaData }) => {
  return (
    <>
      <Meta
        title={`${metaData.title} | Ryan Dunn`}
        description={metaData.description}
      />
      <Header />
      <div className="content pt-8 lg:pt-11">
        <article className="article mb-16">
          <div className="pl-8 pr-8 mb-10">
            <h1 className="mb-5">{metaData.title}</h1>
            <ArticleMeta metaData={metaData} />
            <div className="h-px bg-gray-200 mt-8" />
          </div>
          <ReactMarkdown
            source={body}
            renderers={{
              paragraph: renderParagraph,
              code: renderCode,
            }}
          />
        </article>
      </div>

      <div className="content content_sm mt-16 mb-16 pt-8 border-t border-gray-200">
        <Share
          url={encodeURIComponent(`https://ryandunn.dev/blog/${metaData.slug}`)}
          className="mb-8"
        />
        <Author className="mb-8" />
      </div>

      <Footer />
    </>
  );
};

export default BlogTemplate;
