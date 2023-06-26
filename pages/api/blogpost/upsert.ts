import { createRouter, expressWrapper } from "next-connect";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import {
  getSlugifiedString,
  getRandomCharacters,
} from "@/utils/utilityFunctions";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get((req: NextApiRequest, res: NextApiResponse) => {
    console.log(
      getSlugifiedString("Happy Birthday to me" + "-" + getRandomCharacters())
    );

    return res.status(200).json({ msg: "success" });
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    const slug = getSlugifiedString(body.title + "-" + getRandomCharacters());
    console.log(slug);

    // const data = await prisma.blogPosts.upsert({});
  });

export default router.handler({
  onError: (err: ApiError, req: NextApiRequest, res: NextApiResponse) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
