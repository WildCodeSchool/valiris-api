ALTER TABLE `message` 
ADD COLUMN `id_booking` INT NULL DEFAULT NULL AFTER `id_contact`,
ADD INDEX `fk_booking_idx` (`id_booking` ASC);

ALTER TABLE `message` 
ADD CONSTRAINT `fk_booking`
  FOREIGN KEY (`id_booking`)
  REFERENCES `booking` (`id`);