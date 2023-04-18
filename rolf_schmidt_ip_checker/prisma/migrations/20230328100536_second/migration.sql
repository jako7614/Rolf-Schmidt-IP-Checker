/*
  Warnings:

  - You are about to drop the `iplog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relaylog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `iplog`;

-- DropTable
DROP TABLE `relaylog`;

-- CreateTable
CREATE TABLE `Ip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `state` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relay` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `state` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
