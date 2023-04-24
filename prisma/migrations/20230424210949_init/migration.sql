-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dp" TEXT NOT NULL,
    "dpAlt" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BlogPosts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT,
    "banner" TEXT,
    "bannerAlt" TEXT,
    "date" DATETIME,
    "content" TEXT,
    "minuteRead" INTEGER DEFAULT 1,
    "authorId" INTEGER,
    "topicId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "BlogPosts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BlogPosts_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
