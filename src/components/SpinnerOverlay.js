import React from "react";
import styles from "./SpinnerOverlay.module.css";

export default function SpinnerOverlay({ children, active }) {
  return (
    <div className={styles.overlay}>
      <div
        style={{
          visibility: active ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
      {active && (
        <div className={styles.active}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 50"
            className={styles.spinner}
          >
            <circle
              className={styles.path}
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
