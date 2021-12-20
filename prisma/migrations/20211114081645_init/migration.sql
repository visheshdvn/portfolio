-- CreateTable
CREATE TABLE "blogposts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,

    CONSTRAINT "blogposts_pkey" PRIMARY KEY ("id")
);
