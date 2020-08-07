import React from "react";
import { FaCodepen, FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <nav className="flex items-center justify-center lg:text-lg">
      <a href="mailto:contact@ryandunn.dev" className="p-3 text-gray-700">
        <span className="sr-only">Email: contact@ryandunn.dev</span>
        <FaRegEnvelope />
      </a>
      <a href="https://twitter.com/ryandunndev" className="p-3 text-gray-700">
        <span className="sr-only">Twitter: @ryandunndev</span>
        <FaTwitter />
      </a>
      <a href="https://codepen.io/ryandunn" className="p-3 text-gray-700">
        <span className="sr-only">Codepen: @ryandunn</span>
        <FaCodepen />
      </a>
      <a href="https://github.com/ryanantonydunn" className="p-3 text-gray-700">
        <span className="sr-only">Github: @ryanantonydunn</span>
        <FaGithub />
      </a>
    </nav>
  );
};

export default SocialLinks;
