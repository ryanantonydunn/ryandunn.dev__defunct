import Head from "next/head";
import { useRef, useEffect } from "react";
import styles from "./Layout.module.css";
import shootyCanvasLetters from "../utils/ShootyCanvasLetters";
import { FaTwitter, FaCodepen, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Layout({
  title = "Ryan Dunn",
  description = "Apps, JavaScript, reactjs and react native",
  children,
}) {
  const canvas = useRef();
  useEffect(() => {
    shootyCanvasLetters({
      canvas: canvas.current,
      w: 700,
      h: 500,
      text: "Ryan Dunn",
      size: 12,
      gap: 24,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="Description" content={description}></meta>
      </Head>
      <canvas className={styles.title} ref={canvas} />
      {children}
      {/* <div className={styles.container}>
        <img
          className={styles.avatar}
          src="/static/images/ryandunn.png"
          alt="Ryan Dunn"
        />
        <div className={styles.details}>
          Front End Developer - Manchester UK
        </div>
        <nav className={styles.nav}>
          <a className="button" href="https://twitter.com/ryandunndev">
            <FaTwitter />
            Twitter
          </a>
          <a className="button" href="mailto:contact@ryandunn.dev">
            <FaEnvelope />
            Email
          </a>
          <a className="button" href="https://codepen.io/ryandunn">
            <FaCodepen />
            Codepen
          </a>
          <a className="button" href="https://github.com/ryanantonydunn">
            <FaGithub />
            Github
          </a>
        </nav>
        <div className={styles.content}>{children}</div>
      </div> */}
    </>
  );
}
