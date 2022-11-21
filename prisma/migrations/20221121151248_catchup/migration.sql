-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Axie" (
    "id" SERIAL NOT NULL,
    "axieId" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,
    "bodyShape" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parts" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cuteRatingTotal" INTEGER NOT NULL,
    "coolRatingTotal" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "axieScore" INTEGER NOT NULL,

    CONSTRAINT "Axie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "axieId" INTEGER NOT NULL,
    "voter" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cuteRating" INTEGER NOT NULL,
    "coolRating" INTEGER NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Axie_axieId_key" ON "Axie"("axieId");
