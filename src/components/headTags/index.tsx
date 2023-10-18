import React from "react";
import Head from "next/head";
// import {
//   DEFAULT_OG,
//   DEFAULT_OG_ALT,
//   DEFAULT_META_DESCRIPTION,
// } from "@/utils/constants";
import NoIndex from "./noIndex";

export const DEFAULT_OG =
  "https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-medium.png";
export const DEFAULT_OG_ALT = "LumBytes Logo.";

export const HOMEPAGE_URL = "https://lumbytes.com";

export const DEFAULT_META_DESCRIPTION =
  "LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies.";

const HeadTags = ({
  title,
  metaDescription,
  ogImg,
  ogAlt,
  canonical,
  noIndex,
  includeSocialMediaTags,
}: {
  title: string;
  metaDescription?: string;
  ogImg?: string;
  ogAlt?: string;
  canonical?: string;
  noIndex?: boolean;
  includeSocialMediaTags?: boolean;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={metaDescription || DEFAULT_META_DESCRIPTION}
        />
        {canonical && <link rel="canonical" href={canonical} />}

        {includeSocialMediaTags && (
          <>
            {/* opengraph */}
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:type" content="blog" />
            <meta
              property="og:description"
              content={metaDescription || DEFAULT_META_DESCRIPTION}
              key="ogdesc"
            />
            <meta
              property="og:image"
              content={ogImg || DEFAULT_OG}
              key="ogimage"
            />
            <meta property="og:image:alt" content={ogAlt || DEFAULT_OG_ALT} />
            <meta property="og:site_name" content="Lumbytes" />
            <meta property="og:url" content={canonical} />

            {/* twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@lumbytes" />
            <meta name="twitter:creator" content="@visheshdvn" />
            <meta name="twitter:image:src" content={ogImg || DEFAULT_OG} />
            <meta name="twitter:image:alt" content={ogAlt || DEFAULT_OG_ALT} />
            <meta
              name="twitter:description"
              content={metaDescription || DEFAULT_META_DESCRIPTION}
            />
          </>
        )}
      </Head>
      {!!noIndex && <NoIndex />}
    </>
  );
};

export default HeadTags;
