import { useEffect, useRef } from "react";
import shootyCanvasLetters, {
  cancelShootyCanvasLetters,
} from "../utils/ShootyCanvasLetters";
import Link from "next/link";
import styles from "./Header.module.css";
import SocialLinks from "./SocialLinks";

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
    <header className={styles.header}>
      <canvas ref={canvas} />
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
      <span className={styles.break} />
      <SocialLinks />
    </header>
  );
};

export default Header;
