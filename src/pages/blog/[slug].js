import format from "date-fns/format";
import ReactMarkdown from "react-markdown";
import {
  ArticleHero,
  ArticleMeta,
  getArticle,
  getArticles,
} from "../../components/ArticleList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

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
  children?.length === 1 && children[0].props.src ? (
    <div className="img">{children}</div>
  ) : (
    <p>{children}</p>
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
          </div>
          <div className="mb-8">
            <ArticleHero metaData={metaData} />
          </div>
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
