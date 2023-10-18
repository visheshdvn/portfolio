import Head from "next/head";

const NoIndex = () => {
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <meta name="googlebot" content="noindex" />
    </Head>
  );
};

export default NoIndex;
