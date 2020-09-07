import ArticleList, {
  getArticles,
} from "../components/article-list/ArticleList";
import Button, { ButtonList } from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LoadFloater from "../components/load-floater/LoadFloater";
import Meta from "../components/meta/Meta";
import styles from "./index.module.css";

export const getStaticProps = async () => {
  const articles = await getArticles();
  return { props: { articles } };
};

const projects = [
  {
    title: "Raildiary",
    description: (
      <>
        <p>
          Raildiary makes market leading software for the Rail Construction
          industry. Some of my contributions to the platform include:
        </p>
        <ul>
          <li>
            Major refactor of all UI components in a large React Native app
          </li>
          <li>
            Large scale data import feature used to import thousands of
            construction records into a bespoke system every week
          </li>
          <li>
            Major refactor of the UI component library to meet accessibility
            standards in a large React web-app
          </li>
        </ul>
      </>
    ),
    image: "raildiary.svg",
    imageClass: "pl-2 pr-2",
    primaryLink: "https://www.raildiary.com/en",
    primaryLinkText: "Visit Website",
  },
  {
    title: "MyDailyTracker",
    description: (
      <>
        <p>
          MyDailyTracker is a fully-customisable mood and habit tracking app
          aimed at improving mental health and wellbeing through
          self-reflection. I am the founder of the project.
        </p>
        <ul>
          <li>Customisable metrics and inputs to track personal data</li>
          <li>
            Securely encrypted personal data to meet GDRP to meet GDPR and HIPAA
            standards
          </li>
          <li>
            Data visualisation tools to gain personal insight from state of
            mind, goals and activities
          </li>
        </ul>
      </>
    ),
    image: "mydailytracker.png",
    primaryLink: "disabled",
    primaryLinkText: "Not available",
  },
  {
    title: "Project Ants",
    description: (
      <>
        <p>
          Project Ants is a multiplayer action browser game. This is a
          long-running personal project of mine.
        </p>
        <ul>
          <li>Custom collision engine</li>
          <li>Large customisability of objects and weapons</li>
          <li>Multiplayer capable with a node server architecture</li>
          <li>Image based maps that can be customised</li>
          <li>Procedurally generated random maps</li>
          <li>Map based gravity</li>
        </ul>
      </>
    ),
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
            <div className="profile">
              <img src="/static/images/ryandunn.jpg" alt="Ryan Dunn" />
            </div>
          </LoadFloater>
        </div>
      </div>
      <div className={styles.intro}>
        <div className="pixel-transition" />
        <div className={styles.intro_content}>
          <h2 className="mb-6">Featured Projects</h2>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((p, i) => (
          <div key={i} className={styles.project}>
            <div className={styles.project_inner}>
              <div className={styles.project_image}>
                <img
                  className={p.imageClass || ""}
                  src={`/static/images/${p.image}`}
                  alt={`/static/images/${p.title}`}
                />
              </div>
              {p.description}
              <ButtonList>
                {p.secondaryLink && (
                  <Button
                    secondary
                    href={p.secondaryLink}
                    title={p.secondaryLinkText}
                  />
                )}
                {p.primaryLink && (
                  <Button
                    disabled={p.primaryLink === "disabled"}
                    href={p.primaryLink}
                    title={p.primaryLinkText}
                  />
                )}
              </ButtonList>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.articles}>
        <h2>Latest Articles</h2>
        <p>
          On-the-ground problem solving in frontend development.
          <br />
          Javascript, React, React Native, CSS, UX, Accessibility.
        </p>
        <p className={styles.articles_buttons}>
          <Button href="/blog" title="View all articles" />
        </p>
        <ArticleList articles={articles.slice(0, 3)} />
      </div>
      <Footer />
    </>
  );
};

export default Index;
