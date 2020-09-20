import React, { useEffect, useRef, useState } from "react";
import styles from "./LoadFloater.module.css";

let count = 0;
const listeners = {};
let checkListeners;

export const getScroll = () =>
  typeof window !== "undefined"
    ? window.pageYOffset || document.documentElement.scrollTop
    : 0;

if (typeof window !== "undefined") {
  checkListeners = () => {
    const windowBottom = getScroll() + Math.max(window.innerHeight, 200);
    Object.entries(listeners).forEach(
      ([key, { y, delay, hasAnimated, animate }]) => {
        if (hasAnimated) return;
        if (y < windowBottom) {
          listeners[key].hasAnimated = true;
          setTimeout(() => animate(), delay);
        }
      }
    );
  };
  window.addEventListener("scroll", checkListeners, { passive: true });
}

const LoadFloater = ({ delay = 0, children, className }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const index = String(++count);
    const { top, height } = ref.current.getBoundingClientRect();
    listeners[index] = {
      y: getScroll() + top + Math.min(height, 200),
      delay,
      hasAnimated: false,
      animate: () => setShow(true),
    };
    checkListeners && checkListeners();
    return () => {
      delete listeners[index];
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`${styles.floater} ${
        show ? styles.show : styles.hide
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default LoadFloater;
