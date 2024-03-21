-- CreateTable
CREATE TABLE `Menu` (
    `menuId` INTEGER NOT NULL AUTO_INCREMENT,
    `menuName` VARCHAR(50) NOT NULL,
    `menuType` VARCHAR(50) NOT NULL,
    `createBy` VARCHAR(50) NULL,
    `updateBy` VARCHAR(50) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT (now()),
    `updatedAt` DATETIME(0) NULL DEFAULT (now()),
    `parentId` INTEGER NOT NULL,
    `remark` VARCHAR(500) NULL,
    `seq` INTEGER NULL,
    `status` INTEGER NULL,
    `icon` VARCHAR(50) NULL,
    `perms` VARCHAR(50) NULL,
    `deleted` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `name`(`menuName`),
    PRIMARY KEY (`menuId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(50) NOT NULL,
    `createBy` VARCHAR(50) NULL,
    `updateBy` VARCHAR(50) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT (now()),
    `updatedAt` DATETIME(0) NULL DEFAULT (now()),
    `isAdmin` INTEGER NULL DEFAULT 0,
    `remark` VARCHAR(500) NULL,
    `deleted` INTEGER NULL DEFAULT 0,
    `seq` INTEGER NULL DEFAULT 0,
    `status` INTEGER NULL DEFAULT 0,

    UNIQUE INDEX `roleName`(`roleName`),
    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `password` VARCHAR(191) NOT NULL,
    `salt` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `sex` INTEGER NULL,
    `tel` VARCHAR(191) NULL,
    `status` INTEGER NULL DEFAULT 0,
    `nickName` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `loginIp` VARCHAR(191) NULL,
    `loginTime` DATETIME(3) NULL,
    `wxOpenid` VARCHAR(191) NULL,
    `wxSessionKey` VARCHAR(191) NULL,
    `remark` VARCHAR(191) NULL,
    `deleted` INTEGER NOT NULL DEFAULT 0,
    `orgId` INTEGER NOT NULL,
    `orgName` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(191) NOT NULL,
    `createBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateBy` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_userName_key`(`userName`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleList` (
    `role_id` INTEGER NULL,
    `user_id` INTEGER NULL,

    INDEX `role_id`(`role_id`),
    INDEX `user_id`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `roleList` ADD CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `Role`(`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `roleList` ADD CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
