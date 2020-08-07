import Head from "next/head";

export default function Meta({
  title = "Ryan Dunn",
  description = "Front-end developer and designer. Javascript, ReactJS, React Native and App Development",
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="Description" content={description}></meta>
    </Head>
  );
}
