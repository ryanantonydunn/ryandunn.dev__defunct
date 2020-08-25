import React, { useState } from "react";
import styles from "./MailingList.module.css";
import SpinnerOverlay from "./SpinnerOverlay";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = (e) => {
    setLoading(true);
    fetch("/api/subscribe", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then(({ error }) => {
        if (error) {
          setMessage("");
          setError(error);
        } else {
          setError("");
          setMessage("Successfully subscribed!");
        }
      })
      .catch((err) => {
        setMessage("");
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="content content_sm mb-16 mt-8">
      <div className={styles.box}>
        <div className="md:flex md:flex-row items-center justify-between">
          <h4>Get updates directly</h4>
          <p className="text-sm">*Nothing but post updates. Ever.</p>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.message}>{message}</div>}
        <div className="flex flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.btn}
            onClick={() => subscribe()}
          >
            <SpinnerOverlay active={loading}>Subscribe</SpinnerOverlay>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
