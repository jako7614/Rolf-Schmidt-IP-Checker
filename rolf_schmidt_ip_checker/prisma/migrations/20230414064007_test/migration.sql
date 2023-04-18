/*
  Warnings:

  - Added the required column `lastState` to the `machineip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `machineip` ADD COLUMN `lastState` BOOLEAN NOT NULL;
