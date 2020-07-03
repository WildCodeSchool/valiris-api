ALTER TABLE `valiris_api_database`.`message` 
DROP FOREIGN KEY `fk_booking`;
ALTER TABLE `valiris_api_database`.`message` 
ADD CONSTRAINT `fk_booking`
  FOREIGN KEY (`id_booking`)
  REFERENCES `valiris_api_database`.`booking` (`id`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;