-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_firstName_lastName_key`(`firstName`, `lastName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand` VARCHAR(45) NOT NULL,
    `model` VARCHAR(45) NOT NULL,
    `year` INTEGER NOT NULL,
    `plate` VARCHAR(10) NOT NULL,
    `cc` INTEGER NULL,
    `color` VARCHAR(45) NULL,
    `image` VARCHAR(255) NULL,
    `purchase_date` DATE NULL,
    `purchase_price` DECIMAL(9, 2) NULL,
    `sale_date` DATE NULL,
    `sale_price` DECIMAL(9, 2) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `car_user_id_plate_key`(`user_id`, `plate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maintenance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `car_id` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `total_price` DECIMAL(9, 2) NULL,
    `mileage` INTEGER NOT NULL,
    `notes` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maintenance_service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DECIMAL(9, 2) NULL,
    `notes` VARCHAR(255) NULL,
    `maintenance_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance` ADD CONSTRAINT `maintenance_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_service` ADD CONSTRAINT `maintenance_service_maintenance_id_fkey` FOREIGN KEY (`maintenance_id`) REFERENCES `maintenance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenance_service` ADD CONSTRAINT `maintenance_service_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
