import { useEffect, useRef } from "react";
import {
  FaCodepen,
  FaGithub,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  MdArrowForward,
  MdDateRange,
  MdKeyboardArrowRight,
  MdLanguage,
  MdNetworkLocked,
  MdTimer,
  MdWeb,
} from "react-icons/md";
import { getPosts } from "../components/BlogPosts";
import shootyCanvasLetters from "../utils/ShootyCanvasLetters";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

const Index = ({ posts }) => {
  const canvas = useRef();
  useEffect(() => {
    shootyCanvasLetters({
      canvas: canvas.current,
      w: 300,
      h: 200,
      text: "Ryan Dunn",
      xPos: 25,
      yPos: 27,
      size: 6,
      gap: 4,
      color: "56, 161, 105",
    });
  }, []);
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 39px)" }}
      >
        <canvas ref={canvas} className="absolute top-0 left-0" />
        <nav className="absolute top-0 right-0 flex items-center p-4 mr-2 text-gray-700 text-lg">
          <a href="/" className="text-lg font-bold text-gray-700 p-4">
            Home
          </a>
          <a href="/" className="text-lg text-gray-500 p-4">
            Blog
          </a>
          <div className="w-0 h-4 mr-6 ml-6 border-r border-gray-300" />
          <button className="p-3 hover:border border-teal-400 rounded-full">
            <FaRegEnvelope />
          </button>
          <button className="p-3">
            <FaTwitter />
          </button>
          <button className="p-3">
            <FaCodepen />
          </button>
          <button className="p-3">
            <FaGithub />
          </button>
        </nav>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="font-bold tracking-tight mb-2"
            style={{ fontSize: "2.75rem" }}
          >
            Front-end Developer & Designer
          </h1>
          <p className="text-xl mb-6">
            Solving problems with software since 2010
          </p>
          <div className="w-40 h-40 bg-red-500 rounded-full overflow-hidden">
            <img src="/static/images/ryandunn.png" />
          </div>
        </div>
      </div>
      <div
        className="text-white gradient text-center"
        style={{ paddingBottom: 300 }}
      >
        <div className="gradient-over" />
        <div
          className="p-16 pb-8 container mr-auto ml-auto"
          style={{ maxWidth: 720 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Design & Development
          </h2>
          <p className="text-lg">
            On-the-ground problem solving in frontend development. Javascript,
            React, React Native, CSS, UX, Accessibility.
          </p>
        </div>
      </div>
      <div className="container ml-auto mr-auto" style={{ marginTop: -280 }}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
          <div className="flex justify-between">
            <div className="w-1/3 p-6 pb-10 border-r border-gray-200">
              <div href="/" className="p-2 text-gray-700 text-center">
                <div className="h-40 mb-4 flex items-center justify-center">
                  <img
                    src="/static/images/raildiary.svg"
                    alt="Raildiary"
                    className="w-3/5 mt-4 mb-8 ml-auto mr-auto"
                  />
                </div>
                <p className="text-lg mb-8">
                  Sitediary is project management software for the Rail
                  Construction industry. I worked on yadda yadda yadda.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.raildiary.com/en"
                    className="flex items-center justify-center mr-2 ml-2 border-2 border-teal-300 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold"
                  >
                    Visit Website
                    <MdArrowForward className="ml-2 text-teal-500" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-6 pb-10 border-r border-gray-200">
              <div href="/" className="p-2 text-gray-700 text-center">
                <div className="h-40 mb-4 flex items-center justify-center">
                  <img
                    src="/static/images/raildiary.svg"
                    alt="Raildiary"
                    className="w-3/5 mt-4 mb-8 ml-auto mr-auto"
                  />
                </div>
                <p className="text-lg mb-8">
                  Sitediary is project management software for the Rail
                  Construction industry. I worked on yadda yadda yadda.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.raildiary.com/en"
                    className="flex items-center justify-center mr-2 ml-2 border-2 border-teal-300 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold"
                  >
                    Visit Website
                    <MdArrowForward className="ml-2 text-teal-500" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-6 pb-10">
              <div href="/" className="p-2 text-gray-700 text-center">
                <div className="h-40 mb-4 flex items-center justify-center">
                  <img
                    src="/static/images/project-ants.png"
                    alt="Project Ants"
                    className="mt-4 mb-8 ml-auto mr-auto max-h-full"
                  />
                </div>
                <p className="text-lg mb-8">
                  Sitediary is project management software for the Rail
                  Construction industry. I worked on yadda yadda yadda.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.raildiary.com/en"
                    className="flex items-center justify-center mr-2 ml-2 border-2 border-gray-200 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold"
                  >
                    View Video
                    <MdArrowForward className="ml-2 text-gray-400" />
                  </a>
                  <a
                    href="https://www.raildiary.com/en"
                    className="flex items-center justify-center mr-2 ml-2 border-2 border-teal-300 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold"
                  >
                    Play Demo
                    <MdArrowForward className="ml-2 text-teal-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <h2 className="text-4xl font-bold tracking-tight mb-4 text-center">
          Latest Articles
        </h2>
        <p className="text-lg text-center mb-8">
          On-the-ground problem solving in frontend development.
          <br />
          Javascript, React, React Native, CSS, UX, Accessibility.
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="https://www.raildiary.com/en"
            className="flex items-center justify-center mr-2 ml-2 border-2 border-teal-300 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold bg-white"
          >
            View all articles
            <MdArrowForward className="ml-2 text-teal-500" />
          </a>
        </div>

        <div className="flex justify-between mb-20">
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
                How to use Tailwind with Create React App and PostCSS with no
                hassle
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
                className="w-full bg-purple-400 mb-8"
                style={{ paddingBottom: "50%" }}
              ></div>
              <h2 className="ml-4 mr-4 mb-5 text-3xl leading-10">
                Should we set a default font-size? Ideals and practicalities
              </h2>
              <div className="text-gray-500 ml-4 mb-4 flex items-center">
                <MdDateRange className="mr-2" /> Jan 20th 2020
                <div className="w-8" />
                <MdTimer className="mr-2" /> 5 minute read
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center">
        <div className="gradient-over" />
        <div
          className="p-16 container mr-auto ml-auto"
          style={{ maxWidth: 720 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Get in touch
          </h2>
          <p className="text-lg mb-4">
            Interested in something lorem ipsum dolor
            <br />
            Two lines looked real nice didn't it
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="https://www.raildiary.com/en"
              className="flex items-center justify-center mr-2 ml-2 border-2 border-teal-300 text-gray-700 p-2 pl-4 pr-4 rounded-full font-bold bg-white"
            >
              Send email
              <MdArrowForward className="ml-2 text-teal-500" />
            </a>
          </div>
          <div className="text-center text-xl">
            <button className="p-3 hover:border border-teal-400 rounded-full">
              <FaRegEnvelope />
            </button>
            <button className="p-3">
              <FaTwitter />
            </button>
            <button className="p-3">
              <FaCodepen />
            </button>
            <button className="p-3">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
