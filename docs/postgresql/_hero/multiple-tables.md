<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![cross-join](/img/interviews/postgresql/cross-join.png) -->

<details open>
<summary><h5>Multiple Tables Manipulation</h5></summary>

- JOIN is used to add additional tables to a query for the purpose of adding selection criteria and possibly ***additional columns***. JOIN requires a join condition that specifies how the tables are related to each other. There are different types of joins, such as ***inner join, left join, right join, full join***, etc., that determine which rows from each table are included in the result set. For example:

```sql
SELECT p.name, p.price, c.name AS category
FROM products p
JOIN categories c ON p.category_id = c.id;
```

This query joins the products and categories tables using the category_id column and returns the name, price, and category name of each product.

- UNION is used to combine the results of two or more queries into a single result set that ***includes all the rows*** that belong to all queries in the union. UNION requires that the queries have the same number and type of columns, and it eliminates any duplicate rows from the result set. There is also a variant called ***`UNION ALL` that does not remove duplicates***. For example:

```sql
SELECT name, price FROM products
UNION
SELECT name, price FROM services;
```

This query combines the name and price columns from the products and services tables and returns a single result set with no duplicates.

- Subqueries: A subquery is a query that is nested inside another query, such as a SELECT, INSERT, UPDATE, or DELETE statement. A subquery can return a single value, a row, a column, or a table that can be used in the outer query. Subqueries can be used to filter, aggregate, or join data from multiple tables. For example:

```sql
SELECT name, price FROM products
WHERE category_id = (SELECT id FROM categories WHERE name = 'Books');
```

This query uses a subquery to select the products that belong to the category with the name 'Books'.

- Common Table Expressions (CTEs): A CTE is a temporary named result set that can be referenced within another SQL statement. A CTE can be used to simplify complex queries, perform recursive queries, or join data from multiple tables. A CTE is defined using the WITH clause before the main query. For example:

```sql
WITH books AS (
  SELECT * FROM products WHERE category_id = 2
)
SELECT b.name, b.price, c.name AS category FROM books b
JOIN categories c ON b.category_id = c.id;
```

This query uses a CTE named books to select the products that belong to the category with the id 2, and then joins them with the categories table.

- Set Operations: Set operations are used to combine the results of two or more queries into a single result set based on set theory. The queries must have the same number and type of columns. The set operations are:

  - INTERSECT: returns the rows that are common to both queries.
  - EXCEPT: returns the rows that are in the first query but not in the second query.
  - UNION: returns all the rows from both queries, eliminating duplicates.
  - UNION ALL: returns all the rows from both queries, including duplicates.

For example:

```sql
SELECT name FROM products WHERE price > 100
INTERSECT
SELECT name FROM products WHERE category_id = 1;
```

This query uses the INTERSECT operation to select the names of the products that have a price greater than 100 and belong to the category with the id 1.

</details>


<details>
<summary><h5>JOIN vs UNION</h5></summary>

| Operation | Purpose | Syntax | Effect | Requirements | Performance |
|-----------|---------|--------|--------|--------------|-------------|
| JOIN      | To add additional tables to a query based on a join condition | SELECT ... FROM table1 JOIN table2 ON condition | Combines data into new columns based on the join condition | The tables must have a common column or expression to join on | Usually faster than UNION because it does not require sorting and duplicate elimination |
| UNION     | To combine the results of two or more queries into a single result set | SELECT ... FROM table1 UNION SELECT ... FROM table2 | Combines data into new rows and eliminates duplicates | The queries must have the same number and type of columns | Usually slower than JOIN because it requires sorting and duplicate elimination |

![JOINvsUNION](/img/interviews/design-system/JOINvsUNION.png)

</details>

<details>
<summary><h5>Where vs Inner join</h5></summary>

| Clause | Purpose | Syntax | Condition | Usage | Scope | Performance |
|--------|---------|--------|-----------|-------|-------|-------------|
| WHERE  | Filters rows based on a condition that can involve any column or expression in the tables | SELECT ... FROM table1, table2 WHERE condition | Can use any operator or function that returns a boolean value | Can be used with any SQL statement that involves tables | Filters data after joining the tables | Depends on various factors, such as the size of the tables, the indexes available, the filter condition used, etc. |
| INNER JOIN | Filters rows based on a condition that involves only the columns that are joined by the clause | SELECT ... FROM table1 INNER JOIN table2 ON condition | Can only use the equality operator `(=)` to compare the joining columns | Can only be used with SELECT statement that involves two or more tables | Filters data while joining the tables | Depends on various factors, such as the size of the tables, the indexes available, the join condition used, etc. |

WHERE and INNER JOIN are two different ways to filter data in SQL queries. They have some similarities and differences that you should be aware of. Here are some of the main points to remember:

- WHERE clause is used to filter rows based on a ***condition that can involve any column or expression*** in the tables. INNER JOIN clause is used to filter rows based on a ***condition that involves only the columns that are joined by the clause***.
- WHERE clause can be used with ***any SQL statement that involves tables***, such as SELECT, INSERT, UPDATE, or DELETE. INNER JOIN clause can only be used with ***SELECT statement that involves two or more tables***.
- WHERE clause can use any operator or function that returns a boolean value, such as `=, <>, >, <, BETWEEN, LIKE, IN, IS NULL`, etc. INNER JOIN clause can only use the equality operator `(=)` to compare the joining columns.
- WHERE clause can be combined with other clauses such as GROUP BY, HAVING, ORDER BY, LIMIT, etc. INNER JOIN clause can be combined with other types of joins, such as LEFT JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN, etc.

Here are some examples of how to use WHERE and INNER JOIN clauses in SQL:

- To select the names and prices of products that have a price lower than 100, you can use a WHERE clause:

```sql
SELECT name, price FROM products WHERE price < 100;
```

- To select the names and prices of products and their categories that have a matching category_id, you can use an INNER JOIN clause:

```sql
SELECT p.name, p.price, c.name AS category FROM products p
INNER JOIN categories c ON p.category_id = c.id;
```

The difference lies in how the data is filtered. In simple terms, WHERE clause filters data after joining the tables. INNER JOIN clause filters data while joining the tables. However, this may not always be true depending on the query optimizer and the execution plan.

The performance of WHERE and INNER JOIN clauses depends on various factors, such as the size of the tables, the indexes available, the join or filter condition used, etc. In general, there is no significant difference between them if they produce the same result set. However, this may not always be true depending on the specific situation and query optimization.

</details>


<details>
<summary><h5>Types of JOIN</h5></summary>

A join is a SQL operation that allows you to combine data from two or more tables based on a common column or expression. PostgreSQL supports various types of joins, each with its own syntax and effect. Here is a list of all join commands in PostgreSQL:

![PostgreSQL-Joins.png](/img/interviews/design-system/PostgreSQL-Joins.png)

- INNER JOIN: returns the rows that match in both tables based on the join condition. Syntax:

```sql
SELECT ... FROM table1 INNER JOIN table2 ON condition;
```

- LEFT JOIN: returns all rows from the left table and the matching rows from the right table, or NULL if there is no match. Syntax:

```sql
SELECT ... FROM table1 LEFT JOIN table2 ON condition;
```

- RIGHT JOIN: returns all rows from the right table and the matching rows from the left table, or NULL if there is no match. Syntax:

```sql
SELECT ... FROM table1 RIGHT JOIN table2 ON condition;
```

- FULL JOIN: returns all rows from both tables, and matches them if possible, or NULL if there is no match. Syntax:

```sql
SELECT ... FROM table1 FULL JOIN table2 ON condition;
```

- CROSS JOIN: returns the Cartesian product of the rows from both tables, i.e., every combination of rows. Syntax:

```sql
SELECT ... FROM table1 CROSS JOIN table2;
```

![cross-join](/img/interviews/postgresql/cross-join.png)

- NATURAL JOIN: returns the rows that have equal values in the common columns of both tables. The common columns are determined by the column names. Syntax:

```sql
SELECT ... FROM table1 NATURAL JOIN table2;
```

- SELF JOIN: returns the rows that match between two instances of the same table. Syntax:

```sql
SELECT ... FROM table1 t1 JOIN table1 t2 ON condition;
```

</details>