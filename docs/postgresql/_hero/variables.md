<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![design-system](/img/interviews/design-system/clustered-and-non-clustered-index_thumbnail.webp) -->

<details open>
<summary><h5>Variables</h5></summary>

Variables are names that represent values stored in memory. Variables can have different data types, such as numeric, character, boolean, date/time, array, composite, etc. Variables can be declared in the declaration section of a block using the following syntax:

```sql
name [ CONSTANT ] type [ COLLATE collation_name ] [ NOT NULL ] [ { DEFAULT | := | = } expression ];
```

Some examples of variable declarations are:

```sql
user_id integer; -- declare an integer variable
quantity numeric (5); -- declare a numeric variable with precision 5
url varchar; -- declare a variable-length character variable
myrow tablename%ROWTYPE; -- declare a variable of the same type as a table row
myfield tablename.columnname%TYPE; -- declare a variable of the same type as a table column
arow RECORD; -- declare a record variable that can hold any row type
```

Variables can be assigned values using the assignment operator (:=) or the equal sign (=). For example:

```sql
user_id := 123; -- assign 123 to user_id
quantity = quantity + 1; -- increment quantity by 1
url := 'https://www.postgresql.org/'; -- assign a string to url
```

Variables can be used in expressions, conditions, queries, etc. For example:

```sql
IF user_id > 0 THEN -- check if user_id is positive
  RAISE NOTICE 'User ID: %', user_id; -- display user_id
END IF;

SELECT * FROM products WHERE price > quantity; -- use quantity variable in a query

arow := ROW(1, 'foo', true); -- assign a row value to a record variable
```

</details>

<details>
<summary><h5>Basic Control Structures</h5></summary>

PostgreSQL supports various types of control structures that you can use to write complex logic in stored procedures. Control structures are blocks of code that can alter the flow of execution based on some conditions or loops.

The main types of control structures in PostgreSQL are:

- **IF**: This allows you to execute a block of code only if a certain condition is true. You can also use ELSE or ELSIF clauses to handle alternative cases. For example:

```sql
IF amount > 1000 THEN
  RAISE NOTICE 'The amount is large: %', amount;
ELSIF amount < 0 THEN
  RAISE EXCEPTION 'The amount cannot be negative';
ELSE
  RAISE NOTICE 'The amount is normal: %', amount;
END IF;
```

- **CASE**: This allows you to execute different blocks of code based on the value of an expression. You can use WHEN clauses to specify the possible values and the corresponding actions. You can also use ELSE clause to handle the default case. For example:

```sql
CASE grade
  WHEN 'A' THEN
    RAISE NOTICE 'Excellent!';
  WHEN 'B' THEN
    RAISE NOTICE 'Good!';
  WHEN 'C' THEN
    RAISE NOTICE 'Fair!';
  WHEN 'D' THEN
    RAISE NOTICE 'Poor!';
  ELSE
    RAISE NOTICE 'Invalid grade';
END CASE;
```

- **LOOP**: This allows you to repeat a block of code until a certain condition is met. You can use different types of loops, such as WHILE, FOR, and FOREACH, to iterate over different kinds of data. You can also use EXIT or CONTINUE statements to control the loop execution. For example:

```sql
-- loop from 1 to 10 and print odd numbers
FOR i IN 1..10 LOOP
  IF i % 2 = 0 THEN -- if i is even
    CONTINUE; -- skip the current iteration
  END IF;
  RAISE NOTICE 'Odd number: %', i;
END LOOP;
```

</details>

<details>
<summary><h5>Cursor</h5></summary>

A cursor in PostgreSQL is a ***special type of variable*** that allows you to encapsulate a query and process its result set one row at a time. Cursors are useful when you want to divide a large result set into smaller chunks and process each chunk individually, or when you want to return a reference to a cursor from a function and let the caller fetch the rows.

To use a cursor in PostgreSQL, you need to follow these steps:

- Declare a cursor variable of type REFCURSOR, or use the cursor declaration syntax to bind a query to a cursor variable.
- Open the cursor using the OPEN statement, and optionally pass some parameters to the query if it is parameterized.
- Fetch rows from the cursor using the FETCH statement, and assign them to variables or records for processing. You can also use a loop to fetch all rows from the cursor until no more rows are available.
- Close the cursor using the CLOSE statement when you are done with it.

Here are some examples of how to use cursors in PostgreSQL:

- To declare an unbound cursor variable that can be used with any query, you can use this syntax:

```sql
DECLARE my_cursor REFCURSOR;
```

- To declare a bound cursor variable that is associated with a specific query, you can use this syntax:

```sql
DECLARE my_cursor CURSOR FOR SELECT * FROM products;
```

- To declare a bound cursor variable that is associated with a parameterized query, you can use this syntax:

```sql
DECLARE my_cursor CURSOR (p_price NUMERIC) FOR SELECT * FROM products WHERE price > p_price;
```

- To open an unbound cursor variable and associate it with a query, you can use this syntax:

```sql
OPEN my_cursor FOR SELECT * FROM products WHERE price > 100;
```

- To open a bound cursor variable and optionally pass some parameters to the query, you can use this syntax:

```sql
OPEN my_cursor; -- for non-parameterized query
OPEN my_cursor (200); -- for parameterized query with p_price = 200
```

- To fetch one row from the cursor and assign it to variables, you can use this syntax:

```sql
FETCH my_cursor INTO name, price;
```

- To fetch all rows from the cursor and process them in a loop, you can use this syntax:

```sql
LOOP
  FETCH my_cursor INTO name, price;
  EXIT WHEN NOT FOUND; -- exit loop when no more rows
  -- do something with name and price
END LOOP;
```

- To close the cursor when you are done with it, you can use this syntax:

```sql
CLOSE my_cursor;
```

</details>