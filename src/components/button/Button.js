import Link from "next/link";
import React from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import styles from "./Button.module.css";

export const ButtonList = ({ children }) => (
  <div className={styles.list}>{children}</div>
);

const Button = ({
  secondary,
  href,
  onClick,
  title,
  icon = MdArrowForward,
  disabled,
}) => {
  const isExternalLink = href && href.startsWith("http");
  return disabled ? (
    <div className={`${styles.button} ${styles.disabled}`}>
      {title}
      {icon && <MdClose />}
    </div>
  ) : href ? (
    isExternalLink ? (
      <a
        href={href}
        className={`${styles.button} ${secondary ? styles.secondary : ""}`}
      >
        {title}
        {icon && React.createElement(icon)}
      </a>
    ) : (
      <Link href={href}>
        <a className={`${styles.button} ${secondary ? styles.secondary : ""}`}>
          {title}
          {icon && React.createElement(icon)}
        </a>
      </Link>
    )
  ) : (
    <button
      onClick={onClick}
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
    >
      {title}
      {icon && React.createElement(icon)}
    </button>
  );
};

export default Button;
