ALTER TABLE `apartment_message` 
DROP FOREIGN KEY `fk_id_m`,
DROP FOREIGN KEY `fk_id_a`;
ALTER TABLE `apartment_message` 
DROP INDEX `fk_id_m_idx` ,
DROP INDEX `fk_id_a_idx` ;

ALTER TABLE `booking` 
DROP FOREIGN KEY `fk_id_contact`,
DROP FOREIGN KEY `fk_id_apartment_booking`;
ALTER TABLE `booking` 
DROP INDEX `fk_id_contact_idx` ,
DROP INDEX `fk_id_apartment_idx` ;

ALTER TABLE `message` 
DROP FOREIGN KEY `fk_contact`,
DROP FOREIGN KEY `fk_booking`;
ALTER TABLE `message` 
DROP INDEX `fk_booking_idx` ,
DROP INDEX `fk_contact_idx` ;

ALTER TABLE `secondary_picture` 
DROP FOREIGN KEY `fk_id_apartment`;
ALTER TABLE `secondary_picture` 
DROP INDEX `fk_id_apartment_idx` ;


