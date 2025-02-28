-- CreateTable
CREATE TABLE "ShopItem" (
    "ItemId" SERIAL NOT NULL,
    "SellerId" TEXT NOT NULL,
    "images" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("ItemId")
);
