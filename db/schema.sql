CREATE DATABASE burgersDB_db;

USE burgersDB_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(200),
  devoured BOOLEAN,
  date_time datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
