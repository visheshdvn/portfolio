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
    "authorId" INTEGER,
    "topicId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "BlogPosts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BlogPosts_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BlogPosts" ("authorId", "banner", "bannerAlt", "content", "created_at", "date", "description", "id", "minuteRead", "published", "slug", "title", "topicId", "updated_at") SELECT "authorId", "banner", "bannerAlt", "content", "created_at", "date", "description", "id", "minuteRead", "published", "slug", "title", "topicId", "updated_at" FROM "BlogPosts";
DROP TABLE "BlogPosts";
ALTER TABLE "new_BlogPosts" RENAME TO "BlogPosts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
