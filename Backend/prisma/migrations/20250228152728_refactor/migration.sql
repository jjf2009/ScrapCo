/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `itemId` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `itemId` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "itemId",
ADD COLUMN     "itemId" SERIAL NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "itemId",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_itemId_key" ON "Transaction"("itemId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
