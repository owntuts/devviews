<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![design-system](/img/interviews/design-system/clustered-and-non-clustered-index_thumbnail.webp) -->

<details open>
<summary><h5>DDL vs DML</h5></summary>

DDL and DML are two types of SQL statements that have different purposes and effects on the database.

**DDL stands for Data Definition Language**. DDL is used to ***define the structure and schema of the database, such as tables, columns, indexes, constraints***, etc. DDL statements include **CREATE**, **ALTER**, **DROP**, **TRUNCATE**, **COMMENT**, and **RENAME**. DDL statements operate on the entire table or object and ***do not have a `WHERE` clause*** to filter the data. DDL statements are usually ***executed by database administrators or developer***s who need to create or modify the database schema.

**DML stands for Data Manipulation Language**. DML is used to ***manipulate and retrieve data within the database, such as inserting, updating, deleting, or selecting*** records. DML statements include **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **MERGE**, **CALL**, **EXPLAIN PLAN**, and **LOCK TABLE**. DML statements operate on individual rows or groups of rows and ***use a `WHERE` clause*** to filter the data. DML statements are usually ***executed by end-users or applications*** who need to perform data operations on the database.

Here are some examples of DDL and DML statements in PostgreSQL:

- To create a table named customers with three columns: id, name, and email, you can use this DDL statement:

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);
```

- To insert a new record into the customers table, you can use this DML statement:

```sql
INSERT INTO customers (name, email) VALUES ('John Doe', 'john.doe@example.com');
```

- To add a new column named phone to the customers table, you can use this DDL statement:

```sql
ALTER TABLE customers ADD COLUMN phone VARCHAR(20);
```

- To update the phone number of a customer with id 1, you can use this DML statement:

```sql
UPDATE customers SET phone = '123-456-7890' WHERE id = 1;
```

- To delete the customer with id 1 from the customers table, you can use this DML statement:

```sql
DELETE FROM customers WHERE id = 1;
```

- To drop the customers table from the database, you can use this DDL statement:

```sql
DROP TABLE customers;
```

</details>

<details>
<summary><h5>DDL Examples</h5></summary>

CREATE, ALTER, DROP, TRUNCATE, COMMENT, and RENAME are some of the DDL (Data Definition Language) statements in PostgreSQL. They are used to define or modify the structure and schema of the database objects, such as tables, columns, indexes, constraints, etc. Here are some examples of how to use them in PostgreSQL:

- To create a table named products with four columns: id, name, price, and category_id, you can use this DDL statement:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) CHECK (price >= 0),
  category_id INTEGER REFERENCES categories(id)
);
```

- To alter the table products by adding a new column named description and changing the data type of the price column to DECIMAL(12,2), you can use this DDL statement:

```sql
ALTER TABLE products
ADD COLUMN description TEXT,
ALTER COLUMN price TYPE DECIMAL(12,2);
```

- To drop the table products from the database, you can use this DDL statement:

```sql
DROP TABLE products;
```

- To truncate the table products by deleting all the data and resetting the serial column values, you can use this DDL statement:

```sql
TRUNCATE TABLE products RESTART IDENTITY;
```

- To add comments to the table products and its columns, you can use these DDL statements:

```sql
COMMENT ON TABLE products IS 'This table stores the product information';
COMMENT ON COLUMN products.id IS 'This is the primary key of the table';
COMMENT ON COLUMN products.name IS 'This is the name of the product';
COMMENT ON COLUMN products.price IS 'This is the price of the product';
COMMENT ON COLUMN products.category_id IS 'This is the foreign key to the categories table';
COMMENT ON COLUMN products.description IS 'This is the description of the product';
```

- To rename the table products to items and the column category_id to cat_id, you can use these DDL statements:

```sql
ALTER TABLE products RENAME TO items;
ALTER TABLE items RENAME COLUMN category_id TO cat_id;
```

</details>


<details>
<summary><h5>DML Examples</h5></summary>

SELECT, INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, and LOCK TABLE are some of the DML (Data Manipulation Language) statements in PostgreSQL. They are used to manipulate and retrieve data within the database tables. Here are some examples of how to use them in PostgreSQL:

- To select all the columns and rows from the products table, you can use this DML statement:

```sql
SELECT * FROM products;
```

- To insert a new row into the products table with values for name, price, and category_id columns, you can use this DML statement:

```sql
INSERT INTO products (name, price, category_id) VALUES ('Laptop', 999.99, 1);
```

- To update the price of the product with id 1 to 899.99, you can use this DML statement:

```sql
UPDATE products SET price = 899.99 WHERE id = 1;
```

- To delete the product with id 1 from the products table, you can use this DML statement:

```sql
DELETE FROM products WHERE id = 1;
```

- To merge the data from the categories table into the products table based on the matching category_id values, you can use this DML statement:

```sql
MERGE INTO products AS p
USING categories AS c
ON p.category_id = c.id
WHEN MATCHED THEN
UPDATE SET p.category_name = c.name
WHEN NOT MATCHED THEN
INSERT (name, price, category_id, category_name)
VALUES ('Unknown', 0.00, c.id, c.name);
```

To illustrate how this statement works, let's assume that we have the following input tables:

products:

| id | name     | price  | category_id | category_name |
|----|----------|--------|-------------|---------------|
| 1  | Laptop   | 999.99 | 1           | Electronics   |
| 2  | Book     | 19.99  | 2           | Books         |
| 3  | Pen      | 0.99   | 2           | Books         |
| 4  | Keyboard | 49.99  | NULL        | NULL          |

categories:

| id | name        |
|----|-------------|
| 1  | Electronics |
| 2  | Books       |
| 3  | Stationery  |

After executing the MERGE statement, the output table would look like this:

products:

| id | name     | price  | category_id | category_name |
|----|----------|--------|-------------|---------------|
| 1  | Laptop   | 999.99 | 1           | Electronics   |
| 2  | Book     | 19.99  | 2           | Books         |
| 3  | Pen      | 0.99   | 2           | Books         |
| 4  | Keyboard | 49.99  | NULL        | NULL          |
| 5  | Unknown   | 0.00   | 3           | Stationery    |

As you can see, the product with id = 4 was not updated because it had a NULL value for category_id, which did not match any value in the categories table. The product with id = 5 was inserted because there was no product with category_id = 3 in the products table. The other products were updated with their corresponding category names from the categories table.

- To call a stored procedure named get_product_info that takes an input parameter of product id and returns the name and price of the product, you can use this DML statement:

```sql
CALL get_product_info(1);
```

- To explain the execution plan of a query that selects all the products with price greater than 500, you can use this DML statement:

```sql
EXPLAIN SELECT * FROM products WHERE price > 500;
```

- To lock the products table in exclusive mode to prevent other transactions from modifying it until the current transaction ends, you can use this DML statement:

```sql
LOCK TABLE products IN EXCLUSIVE MODE;
```

</details>

<details>
<summary><h5>TRUNCATE TABLE vs. DELETE vs. DROP TABLE</h5></summary>

| Command       | Effect on data | Effect on structure | Effect on auto-increment | Effect on references | Speed | Rollback | WHERE clause | Privilege required |
|---------------|----------------|---------------------|-------------------------|----------------------|-------|----------|--------------|--------------------|
| TRUNCATE TABLE | Removes all rows | Keeps the structure (DDL) | Resets to initial value | Keeps the references | Fast  | No       | No           | DROP               |
| DELETE        | Removes some or all rows | Keeps the structure (DML) | Does not reset         | Keeps the references | Slow  | Yes      | Yes          | DELETE             |
| DROP TABLE    | Removes all rows | Removes the structure (DDL)| Removes the column      | Removes the references | Fast  | No       | No           | DROP               |

```sql
TRUNCATE TABLE products;
DELETE FROM products WHERE price < 10;
DROP TABLE products;
```

</details>


<details>
<summary><h5>Where vs Having</h5></summary>


| Clause | Purpose | Usage | Scope | Aggregation |
|--------|---------|-------|-------|-------------|
| WHERE  | Filters rows before grouping | Can be used with any SQL statement involving tables | Can use any column or expression in the table | Cannot use aggregation functions |
| HAVING | Filters groups after grouping | Can only be used with `SELECT` statement involving aggregation functions | Can only use columns or expressions that are in the `GROUP BY` clause or in an aggregation function | Can use aggregation functions |

WHERE and HAVING are two clauses that can be used to filter data in SQL queries. They have some similarities and differences that you should be aware of. Here are some of the main points to remember:

- WHERE clause is used to filter rows before they are grouped by the GROUP BY clause. HAVING clause is used to filter groups after they are aggregated by the GROUP BY clause.
- WHERE clause can be used with any SQL statement that involves tables, such as SELECT, INSERT, UPDATE, or DELETE. HAVING clause can only be used with SELECT statement that involves aggregation functions, such as SUM, COUNT, AVG, etc.
- WHERE clause can use any column or expression in the table. HAVING clause can only use columns or expressions that are either in the GROUP BY clause or in an aggregation function.
- WHERE clause cannot use aggregation functions. HAVING clause can use aggregation functions (such as `count`, `average`, `min`, `max`, or `sum`).

Here are some examples of how to use WHERE and HAVING clauses in SQL:

- To select the names and prices of products that have a price lower than 100, you can use a WHERE clause:

```sql
SELECT name, price FROM products WHERE price < 100;
```

- To select the categories and average prices of products that have an average price higher than 200, you can use a GROUP BY and a HAVING clause:

```sql
SELECT category, AVG(price) AS avg_price FROM products GROUP BY category HAVING AVG(price) > 200;
```

- To select the names and prices of products that have a price lower than 100 and belong to a category that has an average price higher than 200, you can use a subquery with a WHERE and a HAVING clause:

```sql
SELECT name, price FROM products
WHERE price < 100 AND category IN (
  SELECT category FROM products GROUP BY category HAVING AVG(price) > 200
);
```

</details>