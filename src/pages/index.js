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
import BlogPosts, { getPosts } from "../components/BlogPosts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import shootyCanvasLetters from "../utils/ShootyCanvasLetters";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

const Index = ({ posts }) => {
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 39px)" }}
      >
        <Header />
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
        <BlogPosts />
      </div>
      <Footer />
    </>
  );
};

export default Index;
