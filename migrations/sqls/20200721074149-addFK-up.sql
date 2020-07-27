ALTER TABLE `booking` 
ADD INDEX `fk_id_apartment-booking_idx` (`id_apartment` ASC),
ADD INDEX `fk_id_contact-booking_idx` (`id_contact` ASC);

ALTER TABLE `booking` 
ADD CONSTRAINT `fk_id_apartment-booking`
  FOREIGN KEY (`id_apartment`)
  REFERENCES `apartment` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `fk_id_contact-booking`
  FOREIGN KEY (`id_contact`)
  REFERENCES `contact` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `message` 
ADD INDEX `fk_id_contact-message_idx` (`id_contact` ASC),
ADD INDEX `fk_id_booking-message_idx` (`id_booking` ASC);

ALTER TABLE `message` 
ADD CONSTRAINT `fk_id_contact-message`
  FOREIGN KEY (`id_contact`)
  REFERENCES `contact` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `fk_id_booking-message`
  FOREIGN KEY (`id_booking`)
  REFERENCES `booking` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `secondary_picture` 
ADD INDEX `fk_id_apartment-sp_idx` (`id_apartment` ASC);

ALTER TABLE `secondary_picture` 
ADD CONSTRAINT `fk_id_apartment-sp`
  FOREIGN KEY (`id_apartment`)
  REFERENCES `apartment` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
