import Link from "next/link";
import React from "react";

const Author = ({ className }) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <div className="profile profile_sm">
        <img src="/static/images/ryandunn.jpg" alt="Ryan Dunn" />
      </div>
      <div className="flex-1 ml-6">
        <p className="text-sm mb-0">
          <b>Ryan Dunn</b> is a front-end developer with over ten years
          experience from Manchester U.K.
          <br />
          <Link href="/about">
            <a>Find out more.</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Author;
