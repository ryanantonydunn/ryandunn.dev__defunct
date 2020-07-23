import BlogPosts, { getPosts } from "../components/BlogPosts";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

const Blog = ({ posts }) => {
  return (
    <>
      <Header />
      <div style={{ height: 150 }} />
      <h2 className="text-4xl font-bold tracking-tight mb-4 text-center">
        Blog
      </h2>
      <p className="text-lg text-center mb-8">
        On-the-ground problem solving in frontend development.
        <br />
        Javascript, React, React Native, CSS, UX, Accessibility.
      </p>
      <div className="container ml-auto mr-auto">
        <BlogPosts posts={posts} />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
