import React from "react";
import { FaReddit, FaTwitter } from "react-icons/fa";
import styles from "./Share.module.css";

const Share = ({ url, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <a href={`https://twitter.com/search?q=${url}`} className={styles.link}>
        <FaTwitter className="mr-2" /> Discuss on Twitter
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        className={styles.link}
      >
        <FaTwitter className="mr-2" /> Share on Twitter
      </a>
      <a href={`https://reddit.com/submit?url=${url}`} className={styles.link}>
        <FaReddit className="mr-2" /> Share on Reddit
      </a>
    </div>
  );
};

export default Share;
