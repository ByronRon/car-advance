-- CreateTable
CREATE TABLE `_MaintenanceToService` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_MaintenanceToService_AB_unique`(`A`, `B`),
    INDEX `_MaintenanceToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MaintenanceToService` ADD CONSTRAINT `_MaintenanceToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `maintenance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MaintenanceToService` ADD CONSTRAINT `_MaintenanceToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
