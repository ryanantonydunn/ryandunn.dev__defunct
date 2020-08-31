import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadFloater from "../components/LoadFloater";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta title="About - Ryan Dunn" />
      <Header />
      <div className="content content_sm pt-8 lg:pt-11 mb-16">
        <h1 className="mb-4 text-center">About Me</h1>
        <p className="text-center">
          Hi there. I am Ryan Dunn, a front-end developer from Manchester U.K.
        </p>
        <LoadFloater delay={450}>
          <div className="profile ml-auto mr-auto mb-8 mt-8">
            <img src="/static/images/ryandunn.jpg" alt="Ryan Dunn" />
          </div>
        </LoadFloater>
        <p>
          My background is in design and e-commerce and my strengths currently
          lie in web and mobile applications using the React and React Native
          ecosystem. I love to create forward-thinking user experiences that are
          fast and accessible to everyone.
        </p>
        <p>
          I have over ten years of real-world, problem-solving experience,
          working with clients such as eBay, Walls and the Royal Northern
          College of Music. I am experienced in architecting projects using
          modern front-end tools and techniques that solve problems efficiently.
          Frameworks, bundlers, pre-processors, linters, types, tests and
          pipelines are part of my day-to-day life.
        </p>
        <p>
          In my spare time I enjoy hiking, climbing, the outdoors, playing the
          guitar, and am a friend to dogs everywhere.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
