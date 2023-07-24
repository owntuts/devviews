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