/*
  Warnings:

  - A unique constraint covering the columns `[provider_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `provider_id` VARCHAR(100) NOT NULL DEFAULT '1';

-- CreateIndex
CREATE UNIQUE INDEX `user_provider_id_key` ON `user`(`provider_id`);
