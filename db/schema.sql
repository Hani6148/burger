DROP DATABASE IF EXISTS burger_db;

create database burger_db;

use burger_db;

create table burger (
id int not null auto_increment,
burger_name VARCHAR(30) not null,
devour boolean, 
PRIMARY KEY (id)
);

