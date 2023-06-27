import { createRouter } from "next-connect";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
// import { ApiError } from "next/dist/server/api-utils";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { getServerSession } from "next-auth";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .json({ success: 0, data: {}, message: "Unauthorized" });
  }

  const data = await prisma.blogPosts.findMany({
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
