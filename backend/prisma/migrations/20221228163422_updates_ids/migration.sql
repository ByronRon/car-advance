/*
  Warnings:

  - The primary key for the `car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `maintenance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `maintenance_service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `car_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `maintenance` DROP FOREIGN KEY `maintenance_car_id_fkey`;

-- DropForeignKey
ALTER TABLE `maintenance_service` DROP FOREIGN KEY `maintenance_service_maintenance_id_fkey`;

-- DropForeignKey
ALTER TABLE `maintenance_service` DROP FOREIGN KEY `maintenance_service_service_id_fkey`;

-- AlterTable
ALTER TABLE `car` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `maintenance` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `car_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `maintenance_service` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `maintenance_id` VARCHAR(191) NOT NULL,
    MODIFY `service_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `service` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance` ADD CONSTRAINT `maintenance_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_service` ADD CONSTRAINT `maintenance_service_maintenance_id_fkey` FOREIGN KEY (`maintenance_id`) REFERENCES `maintenance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_service` ADD CONSTRAINT `maintenance_service_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
