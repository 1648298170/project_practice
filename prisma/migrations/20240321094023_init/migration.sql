-- AlterTable
ALTER TABLE `menu` MODIFY `createdAt` VARCHAR(50) NULL DEFAULT (now()),
    MODIFY `updatedAt` VARCHAR(50) NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `role` MODIFY `createdAt` VARCHAR(50) NULL DEFAULT (now()),
    MODIFY `updatedAt` VARCHAR(50) NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `user` MODIFY `loginTime` VARCHAR(191) NULL,
    MODIFY `createdAt` VARCHAR(191) NOT NULL DEFAULT '(now())',
    MODIFY `updatedAt` VARCHAR(191) NOT NULL DEFAULT '(now())';
