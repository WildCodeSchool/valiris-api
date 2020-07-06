ALTER TABLE `message` 
DROP FOREIGN KEY `fk_contact`;
ALTER TABLE `message` 
ADD CONSTRAINT `fk_contact`
  FOREIGN KEY (`id_contact`)
  REFERENCES `contact` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `booking` 
DROP FOREIGN KEY `fk_id_contact`;
ALTER TABLE `booking` 
ADD CONSTRAINT `fk_id_contact`
  FOREIGN KEY (`id_contact`)
  REFERENCES `contact` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
