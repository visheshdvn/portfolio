import { createRouter } from "next-connect";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import {
  getSlugifiedString,
  getRandomCharacters,
  isValidURL,
} from "@/utils/utilityFunctions";
const browserless = require("browserless")();
const getHTML = require("html-get");

const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const {
    title,
    description,
    external,
    externalLink,
    topicId,
    banner,
    bannerAlt,
  } = body;
  const slug = getSlugifiedString(body.title + "-" + getRandomCharacters());

  if (external) {
    if (!(externalLink || "").trim()) {
      return res
        .status(200)
        .json({ data: {}, success: 0, message: "Provide link to content." });
    } else if (!isValidURL(externalLink)) {
      return res
        .status(200)
        .json({ data: {}, success: 0, message: "Invalid link." });
    }

    const getContent = async (url: string) => {
      // create a browser context inside the main Chromium process
      const browserContext = browserless.createContext();
      const promise = getHTML(url, { getBrowserless: () => browserContext });
      // close browser resources before return the result
      promise
        .then(() => browserContext)
        // @ts-ignore
        .then((browser) => browser.destroyContext());
      return promise;
    };

    let fetchedMetadata: {
      title?: string;
      image?: string;
      description?: string;
    } = {};
    await getContent(externalLink)
      .then(metascraper)
      .then((metadata) => (fetchedMetadata = metadata));

    const publishNow: boolean =
      !!fetchedMetadata?.title && !!+topicId && !!fetchedMetadata.image;

    const blog = await prisma.blogPosts.create({
      data: {
        title: fetchedMetadata?.title || "",
        external,
        externalLink,
        banner: fetchedMetadata.image,
        description: fetchedMetadata.description,
        topicId: +topicId || undefined,
        published: publishNow,
        date: publishNow ? new Date().toISOString() : undefined,
      },
      select: {
        title: true,
        external: true,
        externalLink: true,
        banner: true,
        description: true,
        published: true,
        date: true,
        topic: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });

    return res.status(200).json({ data: blog, success: 1, msg: "Created" });
  } else {
    const data = await prisma.blogPosts.create({
      data: {
        title,
        description,
        slug,
        topicId: +topicId,
      },
      select: {
        slug: true,
        title: true,
        description: true,
        content: true,
        external: true,
        externalLink: true,
      },
    });
    res.status(200).json({ data: data, success: 1, msg: "Successful" });
  }
});

export default router.handler({
  // @ts-ignore
  onError: (
    err: { stack: string; statusCode: number; message: string },
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
