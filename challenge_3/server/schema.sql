DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE shipping (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  line1 VARCHAR(100) NOT NULL,
  line2 VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zipcode VARCHAR(5) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE billing (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  creditcard VARCHAR(20),
  expiry_date VARCHAR(10),
  cvv VARCHAR(5),
  billing_zipcode VARCHAR(5) NOT NULL,
  PRIMARY KEY (id)
);