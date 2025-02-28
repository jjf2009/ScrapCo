/*
  Warnings:

  - Added the required column `listPlat` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_phone` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "listPlatform" AS ENUM ('WEBSITE', 'TELEGRAM');

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_user_id_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "listPlat" "listPlatform" NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "seller_name" TEXT NOT NULL,
ADD COLUMN     "seller_phone" TEXT NOT NULL,
ADD COLUMN     "telegram_id" TEXT,
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "pickUpTime" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
