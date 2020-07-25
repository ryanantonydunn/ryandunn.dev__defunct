import matter from "gray-matter";
import { MdDateRange, MdTimer } from "react-icons/md";
import format from "date-fns/format";

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
    <div className="flex flex-wrap justify-between mb-20">
      <div className="w-1/3 pl-4 pr-4">
        <a
          href="/"
          className="block p-2 hover:border-4 border-yellow-500 rounded-lg text-gray-700"
        >
          <div
            className="w-full bg-orange-400 mb-8"
            style={{ paddingBottom: "50%" }}
          ></div>
          <h2 className="ml-4 mb-5 text-3xl leading-10">
            How to use Tailwind with Create React App and PostCSS with no hassle
          </h2>
          <div className="text-gray-500 ml-4 mb-4 flex items-center">
            <MdDateRange className="mr-2" /> Jan 20th 2020
            <div className="w-8" />
            <MdTimer className="mr-2" /> 5 minute read
          </div>
        </a>
      </div>
      <div className="w-1/3 pl-6 pr-6">
        <a
          href="/"
          className="block p-2 hover:border-4 border-red-400 rounded-lg text-gray-700"
        >
          <div
            className="w-full bg-red-400 mb-8"
            style={{ paddingBottom: "50%" }}
          ></div>
          <h2 className="ml-4 mb-5 text-3xl leading-10">
            In search of the ultimate number regex
          </h2>
          <div className="text-gray-500 ml-4 mb-4 flex items-center">
            <MdDateRange className="mr-2" /> Jan 20th 2020
            <div className="w-8" />
            <MdTimer className="mr-2" /> 5 minute read
          </div>
        </a>
      </div>
      <div className="w-1/3 pl-6 pr-6">
        <a
          href="/"
          className="block p-2 hover:border-4 border-purple-400 rounded-lg text-gray-700"
        >
          <div
            className="w-full bg-purple-400"
            style={{ paddingBottom: "50%" }}
          ></div>
          <div className="p-4">
            <h2 className="mb-5">
              Should we set a default font-size? Ideals and practicalities
            </h2>
            <div className="text-gray-500 ml-4 mb-4 flex items-center">
              <MdDateRange className="mr-2" /> Jan 20th 2020
              <div className="w-8" />
              <MdTimer className="mr-2" /> 5 minute read
            </div>
          </div>
        </a>
      </div>
      {posts.map((post) => (
        <div className="w-1/3 pl-6 pr-6 mb-6">
          <a
            href={`/blog/${post.metaData.slug}`}
            className="block p-2 hover:border-4 border-purple-400 rounded-lg text-gray-700"
          >
            <div
              className="w-full bg-purple-400"
              style={{ paddingBottom: "50%" }}
            ></div>
            <div className="p-4 pt-6">
              <h2 className="mb-5">{post.metaData.title}</h2>
              <div className="text-gray-500 mb-5 flex items-center uppercase text-sm">
                <span className="text-gray-700">
                  {format(new Date(post.metaData.date), "MMMM d, yyyy")}
                </span>
                <div className="w-2" />/<div className="w-2" />5 min read
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
