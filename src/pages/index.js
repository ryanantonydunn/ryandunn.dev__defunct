import { useEffect, useRef } from "react";
import { FaCodepen, FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { MdDateRange, MdTimer } from "react-icons/md";
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
      <div className="flex items-center justify-center h-screen">
        <canvas ref={canvas} className="absolute top-0 left-0" />
        <nav className="absolute top-0 right-0 flex items-center p-4 mr-2 text-gray-700 text-lg">
          <a href="/" className="text-lg font-bold text-gray-700 p-4">
            About
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
          <h1 className="text-4xl let font-bold tracking-tight mb-3">
            Front End Developer and Designer
          </h1>
          <p className="text-lg mb-6">
            Solving problems with style since 2010.
          </p>
          <div className="w-40 h-40 bg-red-500 rounded-full overflow-hidden">
            <img src="/static/images/ryandunn.png" />
          </div>
        </div>
      </div>
      <div
        className="pt-10 text-white"
        style={{ backgroundImage: "linear-gradient(to right, green, red)" }}
      >
        Howdy
      </div>

      <div className="mt-4 p-12 flex justify-between">
        <div className="w-1/3 pl-6 pr-6">
          <a
            href="/"
            className="block p-2 hover:border-4 border-yellow-500 rounded-lg text-gray-700"
          >
            <div
              className="w-full bg-orange-400 mb-8"
              style={{ paddingBottom: "50%" }}
            >
              <img src="/static/blog-images/cra-tailwind-postcss.png" />
            </div>
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
    </>
  );
};

export default Index;
