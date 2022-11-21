/*
  Warnings:

  - Added the required column `class` to the `Axie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Axie" ADD COLUMN     "class" TEXT NOT NULL,
ALTER COLUMN "cuteRatingTotal" SET DEFAULT 0,
ALTER COLUMN "coolRatingTotal" SET DEFAULT 0,
ALTER COLUMN "impressions" SET DEFAULT 0,
ALTER COLUMN "axieScore" SET DEFAULT 0;
