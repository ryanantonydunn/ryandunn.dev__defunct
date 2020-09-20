const apps = [
  {
    title: "Project Ants",
    description:
      "Real time multiplayer action game with bespoke 2d physics collision engine",
    links: [
      { label: "Demo", url: "https://projectants.ryandunn.dev" },
      {
        label: "Demo Video",
        url: "https://www.youtube.com/watch?v=7dCMg6u2Qug",
      },
      {
        label: "Github",
        url: "https://github.com/ryanantonydunn/project-ants",
      },
    ],
  },
  {
    title: "Get to Ten",
    description: "Mobile and web game to combine tiles and get a larger number",
    links: [
      { url: "http://ryanantonydunn.github.io/get-to-ten/", label: "Web" },
      {
        url:
          "https://play.google.com/store/apps/details?id=com.ryanantonydunn.gettoten",
        label: "Play Store",
      },
      { url: "https://github.com/ryanantonydunn/get-to-ten", label: "Github" },
    ],
  },
];

const Apps = () => {
  return (
    <>
      <h2>Apps</h2>
      <div class="grid">
        {apps.map(({ title, description, links }) => (
          <section></section>
        ))}
        <div>
          <img src="/static/images/project-ants.webp" alt="Project Ants" />
          <h3>Project Ants</h3>
          <p></p>
          <div className="buttons">
            <a className="button" href="https://projectants.ryandunn.dev">
              Demo
            </a>
            <a
              className="button"
              href="https://www.youtube.com/watch?v=7dCMg6u2Qug"
            >
              Demo Video
            </a>
            <a
              className="button"
              href="https://github.com/ryanantonydunn/project-ants"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <a href="http://ryanantonydunn.github.io/get-to-ten/">
            <img src="/static/images/project-gettoten.webp" alt="Get To Ten" />
          </a>
          <h3>Get To Ten</h3>
          <p>Mobile and web game to combine tiles and get a larger number</p>
          <p>
            <a href="http://ryanantonydunn.github.io/get-to-ten/">Web</a>|
            <a href="https://play.google.com/store/apps/details?id=com.ryanantonydunn.gettoten">
              Play Store
            </a>
            |<a href="https://github.com/ryanantonydunn/get-to-ten">Github</a>
          </p>
        </div>
      </div>
    </>
  );
};
