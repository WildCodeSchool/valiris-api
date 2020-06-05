CREATE TABLE `apartment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_fr` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `week_price` float DEFAULT NULL,
  `month_price` float DEFAULT NULL,
  `details_fr` text,
  `details_en` text,
  `main_picture_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `apartment_message` (
  `id_apartment` int DEFAULT NULL,
  `id_message` int DEFAULT NULL,
  KEY `fk_id_a_idx` (`id_apartment`),
  KEY `fk_id_m_idx` (`id_message`),
  CONSTRAINT `fk_id_a` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id`),
  CONSTRAINT `fk_id_m` FOREIGN KEY (`id_message`) REFERENCES `message` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `starting_date` date DEFAULT NULL,
  `ending_date` date DEFAULT NULL,
  `id_apartment` int DEFAULT NULL,
  `id_contact` int DEFAULT NULL,
  `validation` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_apartment_idx` (`id_apartment`),
  KEY `fk_id_contact_idx` (`id_contact`),
  CONSTRAINT `fk_id_apartment_booking` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id`),
  CONSTRAINT `fk_id_contact` FOREIGN KEY (`id_contact`) REFERENCES `contact` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text,
  `id_contact` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contact_idx` (`id_contact`),
  CONSTRAINT `fk_contact` FOREIGN KEY (`id_contact`) REFERENCES `contact` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `secondary_picture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `id_apartment` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_apartment_idx` (`id_apartment`),
  CONSTRAINT `fk_id_apartment` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;