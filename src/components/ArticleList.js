import format from "date-fns/format";
import matter from "gray-matter";
import styles from "./ArticleList.module.css";
import LoadFloater from "./LoadFloater";

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
      {articles.map(({ metaData }, i) => (
        <article key={metaData.slug} className={styles.item}>
          <LoadFloater delay={(i % 3) * 150} className={styles.floater}>
            <a href={`/blog/${metaData.slug}`} className={styles.link}>
              <h3>{metaData.title}</h3>
              <ArticleMeta metaData={metaData} />
            </a>
          </LoadFloater>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
