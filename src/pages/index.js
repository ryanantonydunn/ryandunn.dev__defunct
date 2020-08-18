import ArticleList, { getArticles } from "../components/ArticleList";
import Button, { ButtonList } from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadFloater from "../components/LoadFloater";
import Meta from "../components/Meta";
import styles from "./index.module.css";

export const getStaticProps = async () => {
  const articles = await getArticles();
  return { props: { articles } };
};

const projects = [
  {
    title: "Raildiary",
    description:
      "Raildiary makes project management software for the Rail Construction industry. I have worked with the team at Raildiary for over a year on their mobile and web platforms.",
    image: "raildiary.svg",
    imageClass: "pl-2 pr-2",
    primaryLink: "https://www.raildiary.com/en",
    primaryLinkText: "Visit Website",
  },
  {
    title: "MyDailyTracker",
    description:
      "MyDailyTracker is a fully-customisable mood and habit tracking app aimed at improving mental health and wellbeing through self-reflection. I am the founder and sole developer of the project.",
    image: "mydailytracker.png",
    primaryLink: "disabled",
    primaryLinkText: "Visit Website",
  },
  {
    title: "Project Ants",
    description:
      "Project Ants is a multiplayer action browser game with customisable physics, objects, weapons and randomly generated maps. This is a long-running personal project of mine.",
    image: "project-ants.png",
    secondaryLink: "https://www.youtube.com/watch?v=7dCMg6u2Qug",
    secondaryLinkText: "View Video",
    primaryLink: "https://projectants.ryandunn.dev",
    primaryLinkText: "Play Demo",
  },
];

const Index = ({ articles }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.splash}>
        <div className={styles.splash_inner}>
          <LoadFloater delay={150}>
            <h1 className="mb-2">Front End Developer & Designer</h1>
          </LoadFloater>
          <LoadFloater delay={300}>
            <p>Solving problems with software since 2010.</p>
          </LoadFloater>
          <LoadFloater delay={450}>
            <div className={styles.splash_img}>
              <img src="/static/images/ryandunn.jpg" alt="Ryan Dunn" />
            </div>
          </LoadFloater>
        </div>
      </div>
      <div className={styles.intro}>
        <div className="pixel-transition" />
        <div className={styles.intro_content}>
          <LoadFloater delay={150}>
            <h2 className="mb-6">Featured Projects</h2>
          </LoadFloater>
          <LoadFloater delay={300}>
            <p>
              Over the years I've worked on projects varying from e-commerce
              web-apps to game development and construction project management
              software. I've worked as part of a team delivering SAAS products,
              as a freelance contractor and as a contributor to open source
              projects.
            </p>
          </LoadFloater>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((p, i) => (
          <div key={i} className={styles.project}>
            <LoadFloater delay={150 + i * 150}>
              <div className={styles.project_inner}>
                <div className={styles.project_image}>
                  <img
                    className={p.imageClass || ""}
                    src={`/static/images/${p.image}`}
                    alt={`/static/images/${p.title}`}
                  />
                </div>
                <p>{p.description}</p>
                <ButtonList>
                  {p.secondaryLink && (
                    <Button
                      secondary
                      href={p.secondaryLink}
                      title={p.secondaryLinkText}
                    />
                  )}
                  {p.primaryLink && (
                    <Button href={p.primaryLink} title={p.primaryLinkText} />
                  )}
                </ButtonList>
              </div>
            </LoadFloater>
          </div>
        ))}
      </div>

      <div className={styles.articles}>
        <LoadFloater delay={150}>
          <h2>Latest Articles</h2>
        </LoadFloater>
        <LoadFloater delay={300}>
          <p>
            On-the-ground problem solving in frontend development.
            <br />
            Javascript, React, React Native, CSS, UX, Accessibility.
          </p>
        </LoadFloater>
        <LoadFloater delay={450}>
          <p className={styles.articles_buttons}>
            <Button href="/blog" title="View all articles" />
          </p>
        </LoadFloater>
        <ArticleList articles={articles.slice(0, 3)} />
      </div>
      <Footer />
    </>
  );
};

export default Index;
