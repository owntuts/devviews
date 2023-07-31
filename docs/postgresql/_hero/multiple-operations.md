<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Gouping and managing multiple operations</h5></summary>

Grouping and managing multiple operations on the data in a database in PostgreSQL can be done in various ways, depending on the purpose and complexity of the operations. Some of the ways are:

- Using the **GROUP BY** clause: The **GROUP BY** clause allows you to group rows that have the same values in one or more columns and apply aggregate functions to each group. For example, you can use the **GROUP BY** clause to calculate the total sales by product category or by month¹.
- Using the **GROUPING SETS** clause: The **GROUPING SETS** clause is a subclause of the **GROUP BY** clause that allows you to generate multiple grouping sets in one query. For example, you can use the **GROUPING SETS** clause to get a sales report with rows for sales per year and rows for sales per department.
- Using the **UNION ALL** operator: The **UNION ALL** operator allows you to combine multiple queries into one result set. For example, you can use the **UNION ALL** operator to get a sales report with rows for sales per year, rows for sales per department, and rows for total sales³.
- Using recursive queries: Recursive queries are queries that refer to themselves or to another query of the same name. Recursive queries can be useful for performing hierarchical or tree-structured data operations, such as finding all descendants of a parent node or finding the shortest path between two nodes.
- **Transactions**: are a way of bundling multiple steps into a single, all-or-nothing operation. Transactions can be started and ended by using the BEGIN, COMMIT, and ROLLBACK commands. Transactions can also be nested using savepoints or prepared for commit in another session. Transactions ensure that the operations are atomic, consistent, isolated, and durable (ACID).
- **Batch processing**: Batch processing is a technique of executing a series of SQL commands or scripts as a single unit, typically in a non-interactive mode. Batch processing can be useful for performing data loading, data transformation, data analysis, or data backup tasks. You can use tools such as psql or pgAdmin to run batch processing in PostgreSQL.
- **Using stored procedures or functions**: Stored procedures or functions are blocks of code that can be executed on demand by using the **CALL** or **SELECT** statement. Stored procedures or functions can perform any action, such as inserting, updating, deleting or selecting data, and can have input and output parameters. Stored procedures or functions can also start and commit transactions within their body .
- **Using triggers**: Triggers are blocks of code that are executed automatically whenever an event occurs on a table or a view, such as insert, update, delete or truncate. Triggers can be used to enforce business rules, maintain audit logs, replicate data or perform other actions. Triggers can be defined to fire before, after or instead of the event, and for each row or statement affected by the event.

</details>

<details>
<summary><h5>Transactions</h5></summary>

Transactions are a fundamental concept of all database systems. They allow you to perform multiple operations as a single, atomic unit of work that either succeeds or fails as a whole. PostgreSQL supports transactions using the **BEGIN**, **COMMIT**, and **ROLLBACK** statements.

Here are some examples of how to use transactions in PostgreSQL:

- To start a transaction, you can use any of these statements: `BEGIN TRANSACTION;`, `BEGIN WORK;`, or `BEGIN;`. For example:

```sql
BEGIN;
INSERT INTO accounts (name, balance) VALUES ('Alice', 10000);
```

- To end a transaction and make the changes permanent, you can use any of these statements: `COMMIT TRANSACTION;`, `COMMIT WORK;`, or `COMMIT;`. For example:

```sql
COMMIT;
```

- To cancel a transaction and undo the changes, you can use any of these statements: `ROLLBACK TRANSACTION;`, `ROLLBACK WORK;`, or `ROLLBACK;`. For example:

```sql
ROLLBACK;
```

- To specify the transaction mode, you can use the `SET TRANSACTION` statement before the first command in the transaction. The transaction mode determines how the transaction interacts with other concurrent transactions. For example:

```sql
BEGIN;
SET TRANSACTION READ ONLY;
SELECT * FROM accounts;
COMMIT;
```

This transaction will only perform read operations and will not see any changes made by other transactions after it starts.

</details>

<details>
<summary><h5>Batch Processing</h5></summary>

Batch processing is a technique to perform multiple operations in a single database connection, which can improve the performance and efficiency of data loading or manipulation. PostgreSQL supports several ways to do batch processing, such as:

- Using the **COPY** command to load data from a file or standard input into a table. This is the fastest way to insert large amounts of data into PostgreSQL, but it requires access to the file system of the server or client. For example:

```sql
COPY table_name FROM '/path/to/file.csv' WITH (FORMAT csv);
```

- Using the **multirow values** syntax to insert multiple rows with a single **INSERT** statement. This can reduce the network overhead and parsing cost of sending many individual statements. For example:

```sql
INSERT INTO table_name (col1, col2, col3) VALUES
(row1_val1, row1_val2, row1_val3),
(row2_val1, row2_val2, row2_val3),
...
(rowN_val1, rowN_val2, rowN_val3);
```

- Using the **pgloader** tool to load data from various sources (such as CSV, JSON, XML, MySQL, SQLite, etc.) into PostgreSQL. This tool can handle errors, data transformations, schema changes, and other options. For example:

```bash
pgloader mysql://user@host/dbname postgresql:///dbname
```

- Using a **batch file** to execute a series of SQL commands or scripts from the command line. This can be useful for automation or scheduling tasks. For example:

```batch
@echo off
psql -h localhost -U postgres -d dbname -f script.sql
```

</details>

<details>
<summary><h5>GROUP BY</h5></summary>

The GROUP BY clause in PostgreSQL is used to ***group rows that have the same values*** in one or more columns ***and apply an aggregate function*** to each group. The GROUP BY clause is often used with aggregate functions such as SUM, COUNT, AVG, MIN, MAX, etc. to calculate summary statistics for each group. Here is an example of using the GROUP BY clause in PostgreSQL:

Suppose you have a table called employees that stores the information of employees in a company, such as id, name, gender, department, salary, etc. The table looks like this:

| id | name | gender | department | salary |
|----|------|--------|------------|--------|
| 1  | Alice | F      | IT         | 5000   |
| 2  | Bob   | M      | HR         | 4000   |
| 3  | Carol | F      | Sales      | 6000   |
| 4  | David | M      | IT         | 7000   |
| 5  | Eve   | F      | Marketing  | 4500   |
| 6  | Frank | M      | Sales      | 5500   |

If you want to find out the total salary of each department, you can use the GROUP BY clause to group the rows by the department column and apply the SUM function to the salary column. The query looks like this:

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```

The output of the query is:

| department | total_salary |
|------------|--------------|
| IT         | 12000        |
| HR         | 4000         |
| Sales      | 11500        |
| Marketing  | 4500         |

The query divides the rows in the employees table into four groups based on the values in the department column: IT, HR, Sales, and Marketing. For each group, it calculates the sum of the salary column and returns it as total_salary.

You can also use multiple columns in the GROUP BY clause to create more specific groups. For example, if you want to find out the number of male and female employees in each department, you can use the GROUP BY clause with both gender and department columns. The query looks like this:

```sql
SELECT gender, department, COUNT(*) AS employee_count
FROM employees
GROUP BY gender, department;
```

The output of the query is:

| gender | department | employee_count |
|--------|------------|----------------|
| F      | IT         | 1              |
| M      | HR         | 1              |
| F      | Sales      | 1              |
| M      | IT         | 1              |
| F      | Marketing  | 1              |
| M      | Sales      | 1              |

The query ***divides the rows in the employees table into six groups*** based on the values in both gender and department columns: ***(F, IT), (M, HR), (F, Sales), (M, IT), (F, Marketing), and (M, Sales)***. For each group, it counts the number of rows and returns it as employee_count.

</details>

<details>
<summary><h5>GROUPING SETS</h5></summary>

The GROUPING SETS clause in PostgreSQL is used to ***specify multiple grouping sets in a single GROUP BY clause***. A grouping set is a set of columns or expressions by which you group the rows. The result of the GROUPING SETS clause is equivalent to the union of the results of each individual grouping set. The GROUPING SETS clause is ***often used with aggregate functions*** to calculate summary statistics for different levels of granularity. Here is an example of using the GROUPING SETS clause in PostgreSQL:

Suppose you have a table called sales that stores the information of sales transactions in a company, such as date, product, quantity, price, etc. The table looks like this:

| date       | product | quantity | price |
|------------|---------|----------|-------|
| 2021-01-01 | A       | 10       | 100   |
| 2021-01-01 | B       | 20       | 50    |
| 2021-01-02 | A       | 15       | 100   |
| 2021-01-02 | C       | 30       | 80    |
| 2021-01-03 | B       | 25       | 50    |
| 2021-01-03 | C       | 35       | 80    |

If you want to find out the total sales amount by date, by product, and overall, you can use the GROUPING SETS clause to ***specify three grouping sets: `(date)`, `(product)`, and `()`***. The query looks like this:

```sql
SELECT date, product, SUM(quantity * price) AS total_sales
FROM sales
GROUP BY GROUPING SETS ( (date), (product), () );
```

The output of the query is:

| date       | product | total_sales |
|------------|---------|-------------|
| 2021-01-01 |         | 2000        |
| 2021-01-02 |         | 3900        |
| 2021-01-03 |         | 4300        |
|            | A       | 2500        |
|            | B       | 2250        |
|            | C       | 5200        |
|            |         | 10200       |

The query ***divides the rows in the sales table into six groups*** based on the values in the date and product columns: `(2021-01-01), (2021-01-02), (2021-01-03), (A), (B), (C), and ()`. For each group, it calculates the sum of the `quantity * price` expression and returns it as total_sales.

You can also ***use the GROUPING() function in conjunction with the GROUPING SETS clause to distinguish the result rows***. ***The GROUPING() function takes one or more arguments that must match the expressions in the GROUP BY clause. It returns 0 if the argument is a member of the current grouping set, or 1 if it is not***. For example, you can use the GROUPING() function to add a column that indicates which level of granularity each row belongs to:

```sql
SELECT date, product, SUM(quantity * price) AS total_sales,
CASE
    WHEN GROUPING(date) = 0 AND GROUPING(product) = 0 THEN 'Date and Product'
    WHEN GROUPING(date) = 0 AND GROUPING(product) = 1 THEN 'Date'
    WHEN GROUPING(date) = 1 AND GROUPING(product) = 0 THEN 'Product'
    WHEN GROUPING(date) = 1 AND GROUPING(product) = 1 THEN 'Overall'
END AS level
FROM sales
GROUP BY GROUPING SETS ( (date, product), (date), (product), () );
```

The output of the query is:

| date       | product | total_sales | level             |
|------------|---------|-------------|-------------------|
| 2021-01-01 | A       | 1000        | Date and Product  |
| 2021-01-01 | B       | 1000        | Date and Product  |
| 2021-01-02 | A       | 1500        | Date and Product  |
| 2021-01-02 | C       | 2400        | Date and Product  |
| 2021-01-03 | B       | 1250        | Date and Product  |
| 2021-01-03 | C       | 2800        | Date and Product  |
|            | A       | 2500        | Product           |
|            | B       | 2250        | Product           |
|            | C       | 5200        | Product           |
|            ||         ||10200||Overall|

</details>

<details>
<summary><h5>UNION ALL</h5></summary>

The UNION ALL clause in PostgreSQL is used to ***combine the results of two or more SELECT statements into a single result set*** that includes all the rows from both queries, including duplicates. The UNION ALL clause is ***similar to the UNION clause, except that it does not remove duplicate rows from the result set***. The UNION ALL clause is often ***used when you want to preserve the original data without any modification or when you want to improve the performance of the query by avoiding the overhead of duplicate elimination***. Here is an example of using the UNION ALL clause in PostgreSQL:

Suppose you have two tables called products and services that store the information of products and services offered by a company, such as name, price, category, etc. The tables look like this:

| name | price | category |
|------|-------|----------|
| A    | 100   | IT       |
| B    | 50    | HR       |
| C    | 80    | Sales    |

| name | price | category |
|------|-------|----------|
| D    | 120   | IT       |
| E    | 40    | Marketing|
| F    | 60    | Sales    |

If you want to find out the names and prices of all products and services, you can use the UNION ALL clause to combine the results of two SELECT statements. The query looks like this:

```sql
SELECT name, price FROM products
UNION ALL
SELECT name, price FROM services;
```

The output of the query is:

| name | price |
|------|-------|
| A    | 100   |
| B    | 50    |
| C    | 80    |
| D    | 120   |
| E    | 40    |
| F    | 60    |

The query returns all rows from both tables, without removing any duplicates. Note that if there are any duplicate rows in either table, they will also be included in the result set.

To use the UNION ALL clause, you need to follow these rules:

- The number and order of columns in each SELECT statement must be the same.
- The data types of corresponding columns in each SELECT statement must be compatible or convertible.
- You can use other clauses such as ORDER BY or LIMIT with the UNION ALL clause, but they must be applied to the final result set, not to each individual query.

</details>