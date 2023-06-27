import { createRouter } from "next-connect";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const topics = await prisma.topics.findMany({
    select: {
      name: true,
      slug: true,
      id: true,
    },
  });
  return res.status(200).json({ data: topics, message: "Success", status: 1 });
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
