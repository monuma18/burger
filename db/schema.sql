###SCHEMA
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger 
(
    id INT auto_increment not NULL,
    burger_name varchar(255) NOT NULL, 
    devoured boolean NOT NULL,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);