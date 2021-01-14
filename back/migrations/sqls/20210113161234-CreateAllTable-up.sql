/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `hackathon_agricole`.`cities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `zipcode` INT NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `lat` FLOAT NOT NULL,
  `long` FLOAT NOT NULL,
  `insee_code` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `hackathon_agricole`.`buyer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `city_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_buyer_cities`
    FOREIGN KEY (`city_id`)
    REFERENCES `hackathon_agricole`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `hackathon_agricole`.`farmers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `registered_at` DATE NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `farm_size` INT NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cities_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `hackathon_agricole`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `hackathon_agricole`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `hackathon_agricole`.`transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATE NOT NULL,
  `price` INT NOT NULL,
  `quantity` DOUBLE NOT NULL,
  `product_id` INT NOT NULL,
  `farmer_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_transactions_2_idx` (`farmer_id` ASC) VISIBLE,
  INDEX `fk_transactions_3_idx` (`buyer_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_1`
    FOREIGN KEY (`product_id`)
    REFERENCES `hackathon_agricole`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_transactions_2`
    FOREIGN KEY (`farmer_id`)
    REFERENCES `hackathon_agricole`.`farmers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_transactions_3`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `hackathon_agricole`.`buyer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;