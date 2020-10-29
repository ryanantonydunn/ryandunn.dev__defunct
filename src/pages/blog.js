import ArticleList, {
  getArticles,
} from "../components/article-list/ArticleList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MailingList from "../components/mailing-list/MailingList";
import Meta from "../components/meta/Meta";

export const getStaticProps = async () => {
  const articles = await getArticles();
  return { props: { articles } };
};

const Blog = ({ articles }) => {
  return (
    <>
      <Meta
        title="Blog - Ryan Dunn"
        description="Front-end development blog. Javascript, ReactJS, React Native and Apps"
      />
      <Header />
      <section>
        <div className="content content_sm text-center pt-8 lg:pt-11">
          <h1 className="mb-4">Blog</h1>
          <p className="mb-8">
            On-the-ground problem solving in frontend development.
            <br />
            Javascript, React, React Native, CSS, UX, Accessibility.
          </p>
        </div>
      </section>
      <section className="content content_lg">
        <ArticleList articles={articles} />
      </section>
      <section className="content content_sm">
        <MailingList />
      </section>
      <Footer />
    </>
  );
};

export default Blog;
