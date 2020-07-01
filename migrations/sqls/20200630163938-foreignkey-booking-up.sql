ALTER TABLE `valiris_api_database`.`message` 
ADD INDEX `fk_booking_idx` (`id_booking` ASC);
;
ALTER TABLE `valiris_api_database`.`message` 
ADD CONSTRAINT `fk_booking`
  FOREIGN KEY (`id_booking`)
  REFERENCES `valiris_api_database`.`booking` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;