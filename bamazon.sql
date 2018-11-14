

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price FLOAT(30,2),
    stock_quantity INT,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Hat","clothing", 20.75,20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Shirt","clothing", 18.45, 15);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Pants","clothing", 30, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Baseball Bat","sporting goods", 49.99, 20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Basketball","sporting goods", 12.99, 15);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Soccerball","sporting goods", 4.88, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Drill","tools", 78.75,20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Hammer","tools", 5.89, 15);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Wrench","tools", 18.30, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("TV", "electronics", 999.99, 4);