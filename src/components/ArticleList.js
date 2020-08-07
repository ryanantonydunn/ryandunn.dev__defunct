import format from "date-fns/format";
import matter from "gray-matter";
import styles from "./ArticleList.module.css";

export const getArticles = async () => {
  const files = await require.context("../articles", true, /\.md$/);
  const values = files.keys().map(files);
  const articles = values
    .map((value) => {
      const document = matter(value.default);
      return {
        metaData: document.data,
        body: document.content,
      };
    })
    .reverse();
  return articles;
};

export const getArticle = async (slug) => {
  const posts = await getArticles();
  return posts.find(({ metaData }) => metaData.slug === slug);
};

export const ArticleHero = ({ metaData }) => (
  <div className={`${styles.hero} ${metaData.hero_class}`}>
    <img src={metaData.hero_image} alt={metaData.hero_alt} />
  </div>
);

export const ArticleMeta = ({ metaData }) => (
  <div className={styles.meta}>
    <span className="text-gray-700">
      {format(new Date(metaData.date), "MMMM d, yyyy")}
    </span>
    <div className="w-2" />/<div className="w-2" />5 min read
  </div>
);

const ArticleList = ({ articles = [] }) => {
  return (
    <div className={styles.container}>
      {articles.map(({ metaData }) => (
        <article key={metaData.slug} className={styles.item}>
          <a href={`/blog/${metaData.slug}`} className={styles.link}>
            <ArticleHero metaData={metaData} />
            <div className="p-4 pt-6">
              <h3 className="mb-5">{metaData.title}</h3>
              <ArticleMeta metaData={metaData} />
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
