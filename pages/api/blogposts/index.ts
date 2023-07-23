import { createRouter } from "next-connect";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { ApiError } from "next/dist/server/api-utils";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  let session;

  const { skip, take, includeUnPublished } = req.query;
  if (includeUnPublished === "true") {
    session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res
        .status(401)
        .json({ success: 0, data: {}, message: "Unauthorized" });
    }
  }

  const data = await prisma.blogPosts.findMany({
    select: {
      slug: true,
      title: true,
      description: true,
      content: true,
      external: true,
      externalLink: true,
      banner: true,
      bannerAlt: true,
      date: true,
      minuteRead: true,
      topic: {
        select: {
          name: true,
          slug: true,
          id: true,
        },
      },
    },
    skip: (skip && +skip) || undefined,
    take: (take && +take) || 20,
    where: {
      published: includeUnPublished !== "true" || undefined,
    },
  });
  res.status(200).json({ data: data, success: 1, msg: "SUCCESS" });
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
