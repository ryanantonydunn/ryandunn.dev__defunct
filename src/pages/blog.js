import ArticleList, { getArticles } from "../components/ArticleList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailingList from "../components/MailingList";
import Meta from "../components/Meta";

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
      <div className="content content_sm text-center pt-8 lg:pt-11">
        <h1 className="mb-4">Blog</h1>
        <p className="mb-8">
          On-the-ground problem solving in frontend development.
          <br />
          Javascript, React, React Native, CSS, UX, Accessibility.
        </p>
      </div>
      <div className="content content_lg">
        <ArticleList articles={articles} />
      </div>
      <MailingList />
      <Footer />
    </>
  );
};

export default Blog;
