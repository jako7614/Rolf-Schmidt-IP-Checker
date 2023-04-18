/*
  Warnings:

  - You are about to drop the `ip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ip`;

-- DropTable
DROP TABLE `relay`;

-- CreateTable
CREATE TABLE `Iplog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `state` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relaylog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `state` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
