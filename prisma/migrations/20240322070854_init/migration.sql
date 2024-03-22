-- AlterTable
ALTER TABLE `user` MODIFY `deleted` INTEGER NULL DEFAULT 0,
    MODIFY `orgId` INTEGER NULL,
    MODIFY `orgName` VARCHAR(191) NULL,
    MODIFY `userName` VARCHAR(191) NULL,
    MODIFY `createBy` VARCHAR(191) NULL,
    MODIFY `createdAt` VARCHAR(191) NULL DEFAULT '(now())',
    MODIFY `updateBy` VARCHAR(191) NULL,
    MODIFY `updatedAt` VARCHAR(191) NULL DEFAULT '(now())';
