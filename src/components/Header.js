import { useEffect, useRef } from "react";
import { FaCodepen, FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import shootyCanvasLetters, {
  cancelShootyCanvasLetters,
} from "../utils/ShootyCanvasLetters";

const Header = () => {
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
    return () => cancelShootyCanvasLetters();
  }, []);

  return (
    <>
      <canvas ref={canvas} className="absolute top-0 left-0" />
      <nav className="absolute top-0 right-0 flex items-center p-4 mr-2 text-gray-700 text-lg">
        <a href="/" className="text-lg font-bold text-gray-700 p-4">
          Home
        </a>
        <a href="/blog" className="text-lg text-gray-500 p-4">
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
    </>
  );
};

export default Header;
