-- create database

CREATE DATABASE kairatheai;

USE kairatheai;

-- -- Registration
-- CREATE TABLE singin(
--     id INT AUTO_INCREMENT NOT NULL,
--     username VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL PRIMARY KEY,
--     pwd VARCHAR(255) NOT NULL
-- );

-- -- Subscribe
-- CREATE TABLE subscribe(
--     id INT AUTO_INCREMENT NOT NULL,
--     email VARCHAR(255) NOT NULL
-- );


-- Registration Table
CREATE TABLE signin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    pwd VARCHAR(255) NOT NULL
);

-- Subscribe Table
CREATE TABLE subscribe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    FOREIGN KEY (email) REFERENCES signin(email) ON DELETE CASCADE
);




