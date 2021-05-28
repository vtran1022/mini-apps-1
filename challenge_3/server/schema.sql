DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE shipping (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  address_line1 VARCHAR(100),
  address_line2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zipcode VARCHAR(5),
  PRIMARY KEY (id)
);

CREATE TABLE billing (
  id TINYINT unsigned NOT NULL AUTO_INCREMENT,
  creditcard VARCHAR(20),
  expiry_date VARCHAR(10),
  cvv VARCHAR(5),
  billing_zipcode VARCHAR(5),
  PRIMARY KEY (id)
);