import Head from "next/head";

export default function Meta({
  title = "Ryan Dunn | Front End Developer & Designer",
  description = "Front-end developer and designer. Javascript, ReactJS, React Native and App Development",
}) {
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
