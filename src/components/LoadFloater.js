import React, { useEffect, useRef, useState } from "react";
import styles from "./LoadFloater.module.css";

const listeners = [];
let checkListeners;

export const getScroll = () =>
  typeof window !== "undefined"
    ? window.pageYOffset || document.documentElement.scrollTop
    : 0;

if (typeof window !== "undefined") {
  checkListeners = () => {
    const windowBottom = getScroll() + Math.max(window.innerHeight, 200);
    listeners.forEach(({ y, delay, hasAnimated, animate }, i) => {
      if (hasAnimated) return;
      if (y < windowBottom) {
        listeners[i].hasAnimated = true;
        setTimeout(() => animate(), delay);
      }
    });
  };
  window.addEventListener("scroll", checkListeners);
}

const LoadFloater = ({ delay = 0, children }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const index = listeners.length;
    const { top, height } = ref.current.getBoundingClientRect();
    listeners.push({
      y: getScroll() + top + Math.min(height, 200),
      delay,
      hasAnimated: false,
      animate: () => setShow(true),
    });
    checkListeners && checkListeners();
    return () => listeners.splice(index, 1);
  }, []);
  return (
    <div
      ref={ref}
      className={`${styles.floater} ${show ? styles.show : styles.hide}`}
    >
      {children}
    </div>
  );
};

export default LoadFloater;
