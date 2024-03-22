/*
  Warnings:

  - You are about to drop the `rolelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `rolelist` DROP FOREIGN KEY `roleList_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `rolelist` DROP FOREIGN KEY `roleList_userId_fkey`;

-- DropTable
DROP TABLE `rolelist`;

-- CreateTable
CREATE TABLE `UserRoles` (
    `roleId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRoles` ADD CONSTRAINT `UserRoles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserRoles` ADD CONSTRAINT `UserRoles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
