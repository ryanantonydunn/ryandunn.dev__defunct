import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import styles from "./Button.module.css";

export const ButtonList = ({ children }) => (
  <div className={styles.list}>{children}</div>
);

const Button = ({ secondary, href, onClick, title, icon = MdArrowForward }) => {
  return href ? (
    <Link href="/blog">
      <a className={`${styles.button} ${secondary && styles.secondary}`}>
        {title}
        {icon && React.createElement(icon)}
      </a>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${styles.button} ${secondary && styles.secondary}`}
    >
      {title}
      {icon && React.createElement(icon)}
    </button>
  );
};

export default Button;
