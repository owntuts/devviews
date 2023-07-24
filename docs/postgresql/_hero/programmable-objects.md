<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![design-system](/img/interviews/design-system/clustered-and-non-clustered-index_thumbnail.webp) -->

<details open>
<summary><h5>Programmable Objects</h5></summary>

- **Programmable objects** are objects that can contain logic and perform operations on the data, such as functions, triggers, views, etc. 

- **Data objects** are objects that store or organize the data itself, such as tables, indexes, sequences, etc. 

Programmable objects and data objects can interact with each other, for example, a function can query a table, a trigger can update an index, a view can reference a sequence, etc.

Here are **main programmable objects** in PostgreSQL::

- **A stored procedure** is ***a block of code*** that can be executed on demand by using the **CALL** statement. A stored procedure ***can perform any action***, such as ***inserting, updating, deleting or selecting data, and can have input and output parameters***. A stored procedure can also start and commit transactions within its body.
- **A function** is ***a block of code that returns a single value or a table***. A function can be used in queries, expressions or other functions, and can have input parameters. A function ***cannot perform any action that modifies the database state***, such as ***inserting, updating or deleting data, and cannot start or commit transactions***.
- **A view** is ***a virtual table that represents the result of a query***. A view can be used to simplify complex queries, provide data abstraction or implement security policies. A view ***can be queried like a regular table***, and ***can also be updated, inserted or deleted*** from if certain conditions are met.
- **A trigger** (or **call back function**) is ***a block of code that is executed automatically whenever an event occurs on a table or a view***, such as insert, update, delete or truncate. A trigger can be used to enforce business rules, maintain audit logs, replicate data or perform other actions. A trigger can be defined to ***fire before, after or instead of the event***, and for each row or statement affected by the event.

There are **other programmable objects** in PostgreSQL, such as:

- **Operators**: symbolic functions that can be used in expressions, such as +, -, *, etc. PostgreSQL allows you to define custom operators using the **CREATE OPERATOR** command.
- **Casts**: conversions between different data types, such as integer to text, text to date, etc. PostgreSQL allows you to define custom casts using the **CREATE CAST** command.
- **Sequences**: objects that generate sequential numbers, such as for auto-increment columns. PostgreSQL allows you to create and manipulate sequences using the **CREATE SEQUENCE**, **ALTER SEQUENCE** and **DROP SEQUENCE** commands.
- **Extensions**: packages of other objects, such as types, functions, operators, casts, indexes, etc., that can be installed and uninstalled as a unit. PostgreSQL allows you to create and manage extensions using the **CREATE EXTENSION**, **ALTER EXTENSION** and **DROP EXTENSION** commands.

</details>

<details>
<summary><h5>Stored Procedure</h5></summary>

A stored procedure is a block of code that can be executed on demand by using the **CALL** statement. A stored procedure can perform any action, such as inserting, updating, deleting or selecting data, and can have input and output parameters. A stored procedure can also start and commit transactions within its body.

The general form of a stored procedure in PostgreSQL is:

```sql
CREATE [ OR REPLACE ] PROCEDURE name ( [ [ argmode ] [ argname ] argtype [ { DEFAULT | = } default_expr ] [, ...] ] )
LANGUAGE lang_name
AS 'definition'
```

In this syntax:

- The **CREATE PROCEDURE** statement defines a new procedure with the given name and parameters.
- The **OR REPLACE** option allows you to replace an existing procedure with the same name and parameters.
- The **argmode** specifies the mode of an argument: IN, OUT, or INOUT. The default is IN.
- The **argname** specifies the name of an argument.
- The **argtype** specifies the data type of an argument.
- The **default_expr** specifies an expression to be used as the default value for an argument if it is not specified.
- The **LANGUAGE** clause specifies the language in which the procedure is written, such as SQL, PL/pgSQL, C, etc.
- The **AS 'definition'** clause specifies the body of the procedure as a string constant.

For example, the following statement creates a stored procedure named transfer that transfers a specified amount of money from one account to another:

```sql
CREATE OR REPLACE PROCEDURE transfer (
  sender INT,
  receiver INT,
  amount DEC
)
LANGUAGE plpgsql
AS $$
BEGIN
  -- subtracting the amount from the sender's account
  UPDATE accounts SET balance = balance - amount WHERE id = sender;
  -- adding the amount to the receiver's account
  UPDATE accounts SET balance = balance + amount WHERE id = receiver;
  COMMIT;
END;
$$
```

To execute this stored procedure, you use the **CALL** statement:

```sql
CALL transfer(1, 2, 1000);
```

This will transfer 1000 from the account with id 1 to the account with id 2.

</details>

<details>
<summary><h5>Function</h5></summary>

A function is a block of code that returns a single value or a table. A function can be used in queries, expressions or other functions, and can have input parameters. A function cannot perform any action that modifies the database state, such as inserting, updating or deleting data, and cannot start or commit transactions.

The general form of a function in PostgreSQL is:

```sql
CREATE [ OR REPLACE ] FUNCTION name ( [ [ argmode ] [ argname ] argtype [ { DEFAULT | = } default_expr ] [, ...] ] )
RETURNS rettype
LANGUAGE lang_name
AS 'definition'
```

In this syntax:

- The **CREATE FUNCTION** statement defines a new function with the given name and parameters.
- The **OR REPLACE** option allows you to replace an existing function with the same name and parameters.
- The **argmode** specifies the mode of an argument: IN, OUT, INOUT, or VARIADIC. The default is IN.
- The **argname** specifies the name of an argument.
- The **argtype** specifies the data type of an argument.
- The **default_expr** specifies an expression to be used as the default value for an argument if it is not specified.
- The **RETURNS** clause specifies the return type of the function, which can be a single value or a table.
- The **LANGUAGE** clause specifies the language in which the function is written, such as SQL, PL/pgSQL, C, etc.
- The **AS 'definition'** clause specifies the body of the function as a string constant.

For example, the following statement creates a function named get_balance that returns the balance of a given account:

```sql
CREATE OR REPLACE FUNCTION get_balance(account_id INT)
RETURNS DEC
LANGUAGE plpgsql
AS $$
DECLARE
  balance DEC;
BEGIN
  SELECT balance INTO balance FROM accounts WHERE id = account_id;
  RETURN balance;
END;
$$
```

To execute this function, you can use it in a query like this:

```sql
SELECT get_balance(1);
```

This will return the balance of the account with id 1.

</details>

<details>
<summary><h5>View</h5></summary>

A view is a virtual table that represents the result of a query. A view can be used to simplify complex queries, provide data abstraction or implement security policies. A view can be queried like a regular table, and can also be updated, inserted or deleted from if certain conditions are met.

The general form of a view in PostgreSQL is:

```sql
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW name [ ( column_name [, ...] ) ]
AS query
```

In this syntax:

- The **CREATE VIEW** statement defines a new view with the given name and columns.
- The **OR REPLACE** option allows you to replace an existing view with the same name and columns.
- The **TEMP** or **TEMPORARY** option allows you to create a temporary view that is automatically dropped at the end of the current session.
- The **column_name** list specifies the names of the columns of the view. If not given, the column names are deduced from the query.
- The **AS query** clause specifies the query that defines the view.

For example, the following statement creates a view named customers_info that shows the name, email and phone number of each customer:

```sql
CREATE VIEW customers_info AS
SELECT name, email, phone FROM customers;
```

To query this view, you can use it like a table:

```sql
SELECT * FROM customers_info;
```

This will return the same result as the query that defines the view.

</details>

<details>
<summary><h5>Trigger</h5></summary>

A trigger is a block of code that is executed automatically whenever an event occurs on a table or a view, such as insert, update, delete or truncate. A trigger can be used to enforce business rules, maintain audit logs, replicate data or perform other actions. A trigger can be defined to fire before, after or instead of the event, and for each row or statement affected by the event.

The general form of a trigger in PostgreSQL is:

```sql
CREATE [ OR REPLACE ] [ CONSTRAINT ] TRIGGER name
{ BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
ON table_name [ FROM referenced_table_name ]
[ NOT DEFERRABLE | [ DEFERRABLE ] [ INITIALLY IMMEDIATE | INITIALLY DEFERRED ] ]
[ REFERENCING { { OLD | NEW } TABLE [ AS ] transition_relation_name } [ ... ] ]
[ FOR [ EACH ] { ROW | STATEMENT } ]
[ WHEN ( condition ) ]
EXECUTE { FUNCTION | PROCEDURE } function_name ( arguments )
```

In this syntax:

- The **CREATE TRIGGER** statement defines a new trigger with the given name and event.
- The **OR REPLACE** option allows you to replace an existing trigger with the same name and event.
- The **CONSTRAINT** option indicates that the trigger is a constraint trigger, which means it can be deferred or made deferrable.
- The **BEFORE**, **AFTER** or **INSTEAD OF** clause specifies the timing of the trigger, which determines when the trigger function is executed relative to the event.
- The **event** specifies one or more events that activate the trigger, such as INSERT, UPDATE, DELETE or TRUNCATE.
- The **ON table_name** clause specifies the table or view that the trigger is associated with.
- The **FROM referenced_table_name** clause specifies an additional table that must be referenced by foreign-key constraint for the trigger to fire.
- The **NOT DEFERRABLE**, **DEFERRABLE**, **INITIALLY IMMEDIATE** or **INITIALLY DEFERRED** clause specifies whether the trigger can be deferred until the end of the transaction and what is its default behavior.
- The **REFERENCING** clause specifies transition tables that allow access to the old and new rows within the trigger function.
- The **FOR EACH ROW** or **FOR EACH STATEMENT** clause specifies the granularity of the trigger, which determines whether the trigger function is executed once for each row affected by the event or once for each statement that causes the event.
- The **WHEN (condition)** clause specifies an optional Boolean expression that must be satisfied for the trigger to fire.
- The **EXECUTE FUNCTION** or **EXECUTE PROCEDURE** clause specifies the name and arguments of the trigger function to be executed when the trigger fires.

For example, the following statement creates a trigger named customers_audit_trigger that logs every insert operation on the customers table into a customers_audit table:

```sql
-- create a table for audit log
CREATE TABLE customers_audit (
    operation CHAR(1) NOT NULL,
    stamp TIMESTAMP NOT NULL,
    userid TEXT NOT NULL,
    customer_id INT NOT NULL,
    customer_name TEXT NOT NULL
);

-- create a trigger function
CREATE FUNCTION log_customers_changes() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        INSERT INTO customers_audit SELECT 'I', now(), user, NEW.*;
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- create a trigger
CREATE TRIGGER customers_audit_trigger
AFTER INSERT ON customers
FOR EACH ROW EXECUTE FUNCTION log_customers_changes();
```

</details>

<details>
<summary><h5>Materialized Views</h5></summary>

A materialized view is a virtual table that represents the result of a query, but stores data physically and periodically refreshes data from the base tables. A materialized view can be used to improve the performance of queries that involve complex calculations or remote data sources.

The general form of a materialized view in PostgreSQL is:

```sql
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] MATERIALIZED VIEW name [ ( column_name [, ...] ) ]
AS query
[ WITH [ NO ] DATA ]
```

In this syntax:

- The **CREATE MATERIALIZED VIEW** statement defines a new materialized view with the given name and columns.
- The **OR REPLACE** option allows you to replace an existing materialized view with the same name and columns.
- The **TEMP** or **TEMPORARY** option allows you to create a temporary materialized view that is automatically dropped at the end of the current session.
- The **column_name** list specifies the names of the columns of the materialized view. If not given, the column names are deduced from the query.
- The **AS query** clause specifies the query that defines the materialized view.
- The **WITH [NO] DATA** clause indicates whether the materialized view should be populated with data at creation time or not.

For example, the following statement creates a materialized view named customers_info that shows the name, email and phone number of each customer:

```sql
CREATE MATERIALIZED VIEW customers_info
AS
SELECT name, email, phone FROM customers
WITH NO DATA;
```

This will create a materialized view, but without populating it with data. To populate the materialized view with data, you need to use the **REFRESH MATERIALIZED VIEW** command:

```sql
REFRESH MATERIALIZED VIEW customers_info;
```

This will refresh the data in the materialized view from the base table. You can also use various options to control how the refresh is performed, such as **CONCURRENTLY**, **WITH [NO] DATA**, etc.

</details>

<details>
<summary><h5>Materialized Views vs Views</h5></summary>

Here is a table that compares some of the features of materialized views and views:

| Feature | Materialized View | View |
| --- | --- | --- |
| Data storage | Stores data physically | Does not store data |
| Data population | Populated at creation time or when refreshed | Populated every time queried |
| Performance | Faster for queries that involve complex calculations or remote data sources | Faster for queries that access the base tables directly |
| Data freshness | Needs to be refreshed periodically to reflect the changes in the base tables | Always shows the latest data from the base tables |
| Indexes, constraints and triggers | Can have indexes, constraints and triggers defined on it | Cannot have indexes, constraints and triggers defined on it |

</details>