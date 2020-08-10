import { useEffect, useRef, useState } from "react";
import shootyCanvasLetters, {
  cancelShootyCanvasLetters,
} from "../utils/ShootyCanvasLetters";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import SocialLinks from "./SocialLinks";
import { getScroll } from "./LoadFloater";

const Header = () => {
  const { pathname } = useRouter();

  // canvas name
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

  // show on scroll
  const lastScroll = useRef(getScroll());
  const [show, setShow] = useState(false);
  useEffect(() => {
    const setHeaderShow = () => {
      const scroll = getScroll();
      setShow(scroll > 130 ? scroll < lastScroll.current : true);
      lastScroll.current = scroll;
    };
    setHeaderShow();
    window.addEventListener("scroll", setHeaderShow);
    return () => window.removeEventListener("scroll", setHeaderShow);
  }, []);

  return (
    <>
      <div className={styles.offset} />
      <header
        className={`${styles.container} ${show ? styles.show : styles.hide}`}
      >
        <canvas ref={canvas} />
        <nav className={styles.nav}>
          <Link href="/">
            <a className={pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href="/blog">
            <a className={pathname.startsWith("/blog") ? styles.active : ""}>
              Blog
            </a>
          </Link>
        </nav>
        <span className={styles.break} />
        <SocialLinks />
      </header>
    </>
  );
};

export default Header;
