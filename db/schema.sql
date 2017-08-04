### Schema

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers(
	id int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUES 	('cheese burger'),
		('double double'),
		('vegan burger');
        
        select * from burgers;
        
DELETE FROM burgers
WHERE id=4;