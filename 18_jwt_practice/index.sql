show DATABASES;
CREATE DATABASE myowndb DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

use myowndb;

SELECT * FROM user;
SELECT * FROM image;
desc image;

show tables;
SELECT Host, User, plugin FROM mysql.user;