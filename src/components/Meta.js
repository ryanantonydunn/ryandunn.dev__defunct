import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function Meta({
  title = "Ryan Dunn | Front End Developer & Designer",
  description = "Front-end developer and designer. Javascript, ReactJS, React Native and App Development",
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
    </Head>
  );
}
