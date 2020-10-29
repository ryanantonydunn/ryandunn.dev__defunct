import Head from "next/head";
import { useEffect, useMemo } from "react";
import ReactGA from "react-ga";

export default function Meta({
  title = "Ryan Dunn | Front End Developer & Designer",
  description = "Front-end developer and designer. Javascript, ReactJS, React Native and App Development",
  image,
}) {
  useEffect(() => {
    ReactGA.initialize("UA-175563982-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="Description" content={description}></meta>
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="ryandunndev" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={""} key="ogurl" />
      <meta property="og:site_name" content="ryandunn.dev" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      {image && <meta property="og:image" content={image} key="ogimage" />}
    </Head>
  );
}
