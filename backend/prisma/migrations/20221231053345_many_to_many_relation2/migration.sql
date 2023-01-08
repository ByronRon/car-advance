/*
  Warnings:

  - You are about to drop the `_maintenancetoservice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_maintenancetoservice` DROP FOREIGN KEY `_MaintenanceToService_A_fkey`;

-- DropForeignKey
ALTER TABLE `_maintenancetoservice` DROP FOREIGN KEY `_MaintenanceToService_B_fkey`;

-- DropTable
DROP TABLE `_maintenancetoservice`;
