import matter from "gray-matter";
import Link from "next/link";

export const getPosts = async () => {
  const files = await require.context("../posts", true, /\.md$/);
  const values = files.keys().map(files);
  const posts = values.map((value) => {
    const document = matter(value.default);
    return {
      metaData: document.data,
      body: document.content,
    };
  });
  return posts;
};

export const getPost = async (slug) => {
  const posts = await getPosts();
  return posts.find(({ metaData }) => metaData.slug === slug);
};

const BlogPosts = ({ posts = [] }) => {
  return (
    <div>
      <h2>Blog</h2>
      {posts.map(({ content, metaData }) => (
        <div key={metaData.slug}>
          <Link href={{ pathname: `/blog/${metaData.slug}` }}>
            <a>{metaData.title}</a>
          </Link>
          <p>{metaData.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
