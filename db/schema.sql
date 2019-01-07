-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:

CREATE DATABASE burgers_db;
USE  burgers_db;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT 0,
PRIMARY KEY (id)
);
SET SQL_SAFE_UPDATES = 1;
DELETE FROM burgers;

SELECT * FROM burgers;
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- Inside your burger directory, create a folder named db.
-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.
-- Run the schema.sql and seeds.sql files into the mysql server from the command line
-- Now you're going to run these SQL files.
-- Make sure you're in the db folder of your app.
-- Start MySQL command line tool and login: mysql -u root -p.
-- With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
-- Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
-- Close out of the MySQL command line tool: exit.