CREATE TABLE IF NOT EXISTS `buyer` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `city_id` INT NOT NULL,
  INDEX `city_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_buyer_cities`
    FOREIGN KEY (`city_id`)
    REFERENCES `cities`(`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO buyer(id,city_id,name,type) VALUES (1,21954,'SOUFFLET','Négociant');
INSERT INTO buyer(id,city_id,name,type) VALUES (2,23053,'CARGILL','Négociant');
INSERT INTO buyer(id,city_id,name,type) VALUES (3,1,'SCAEL','Coopérative');
INSERT INTO buyer(id,city_id,name,type) VALUES (4,7479,'BUNGE','Négociant');
INSERT INTO buyer(id,city_id,name,type) VALUES (5,24356,'HUTTEPAIN','Fabricant d’alimentation animale');
INSERT INTO buyer(id,city_id,name,type) VALUES (6,33289,'SANDERS','Fabricant d’alimentation animale');
INSERT INTO buyer(id,city_id,name,type) VALUES (7,22156,'AGRIAL','Coopérative');
INSERT INTO buyer(id,city_id,name,type) VALUES (8,4695,'OCEALIA','Coopérative');
