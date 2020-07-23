import { FaCodepen, FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <>
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

export default Footer;
