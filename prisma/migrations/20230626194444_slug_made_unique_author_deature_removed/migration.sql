/*
  Warnings:

  - You are about to drop the column `authorId` on the `BlogPosts` table. All the data in the column will be lost.

*/
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
    "external" BOOLEAN NOT NULL DEFAULT false,
    "externalLink" TEXT,
    "topicId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "BlogPosts_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BlogPosts" ("banner", "bannerAlt", "content", "created_at", "date", "description", "external", "externalLink", "id", "minuteRead", "published", "slug", "title", "topicId", "updated_at") SELECT "banner", "bannerAlt", "content", "created_at", "date", "description", "external", "externalLink", "id", "minuteRead", "published", "slug", "title", "topicId", "updated_at" FROM "BlogPosts";
DROP TABLE "BlogPosts";
ALTER TABLE "new_BlogPosts" RENAME TO "BlogPosts";
CREATE UNIQUE INDEX "BlogPosts_slug_key" ON "BlogPosts"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
