ALTER TABLE `valiris_api_database`.`message` 
DROP FOREIGN KEY `fk_booking`;
ALTER TABLE `valiris_api_database`.`message` 
DROP COLUMN `id_booking`,
DROP INDEX `fk_booking_idx` ;
;
