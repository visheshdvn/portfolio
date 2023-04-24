// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function populate() {
  var i = 0;
  while (i < 1000) {
    const data = await prisma.blogPosts.create({
      data: {
        title: "abc",
      },
      select: {
        id: true,
      },
    });

    console.log(data);
    i++;
  }
}

populate();
