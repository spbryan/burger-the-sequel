-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers2_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers2_db;

USE burgers2_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);