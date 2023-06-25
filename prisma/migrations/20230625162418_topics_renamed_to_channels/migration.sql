/*
  Warnings:

  - You are about to drop the `Topics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `topicId` on the `BlogPosts` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Topics";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Channels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BlogPosts" (
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
    "channelId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "BlogPosts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BlogPosts_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channels" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BlogPosts" ("authorId", "banner", "bannerAlt", "content", "created_at", "date", "description", "id", "minuteRead", "published", "slug", "title", "updated_at") SELECT "authorId", "banner", "bannerAlt", "content", "created_at", "date", "description", "id", "minuteRead", "published", "slug", "title", "updated_at" FROM "BlogPosts";
DROP TABLE "BlogPosts";
ALTER TABLE "new_BlogPosts" RENAME TO "BlogPosts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
