/*
  Warnings:

  - You are about to drop the column `role_id` on the `rolelist` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `rolelist` table. All the data in the column will be lost.
  - Added the required column `assignedBy` to the `roleList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `roleList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `roleList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `rolelist` DROP FOREIGN KEY `user_role_ibfk_1`;

-- DropForeignKey
ALTER TABLE `rolelist` DROP FOREIGN KEY `user_role_ibfk_2`;

-- AlterTable
ALTER TABLE `rolelist` DROP COLUMN `role_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `assignedBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`, `roleId`);

-- AddForeignKey
ALTER TABLE `roleList` ADD CONSTRAINT `roleList_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `roleList` ADD CONSTRAINT `roleList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
