<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![design-system](/img/interviews/design-system/clustered-and-non-clustered-index_thumbnail.webp) -->

<details open>
<summary><h5>Clustered index vs Non clustered index</h5></summary>

- A clustered index determine the physical order of rows in a table (when create primary key -> it’s created automatically). Like "dictionary" No need of any other Index, its already Index according to words. Access directly => Faster, no need more disk space.
- A non clustered index is an index that does not affect the physical order of the rows, but stores a pointer to the location of each row. It is analogous to an index in a Book.The data is stored in one place. The index is storing in another place.

![design-system](/img/interviews/design-system/clustered-and-non-clustered-index_thumbnail.webp)

***PostgreSQL does not support clustered indexes***, but it has a **CLUSTER** command that can reorganize a table based on an existing index. However, this command does not maintain the order of the table after subsequent inserts, updates or deletes.

Here is a table that compares some of the features of clustered and non-clustered indexes:

| Feature | Clustered Index | Non-Clustered Index |
| --- | --- | --- |
| Definition | An index that determines the physical order of the rows in a table | An index that does not affect the physical order of the rows, but stores a pointer to the data location |
| Example | A phone book sorted by last name | An index at the end of a book that lists keywords and page numbers |
| Creation | Automatically created by some database systems when defining a primary key, or manually created using a specific command | Manually created using a generic command |
| Number | Only one per table | Multiple per table |
| Disk space | No additional disk space required | Additional disk space required |
| Performance | Faster for queries that access a range of rows or the entire table | Faster for queries that access a specific row or a subset of columns |
| Maintenance | More costly to maintain when inserting, updating or deleting rows, as the physical order of the table may change | Less costly to maintain when inserting, updating or deleting rows, as only the pointers need to be updated |

</details>

<details>
<summary><h5>Types of None_cluster Indexes in postgresql</h5></summary>

PostgreSQL supports several types of indexes, each with different storage structures and algorithms to handle different kinds of queries. According to the official documentation, the index types are:

- **B-tree**: This is the default index type that can handle equality and range queries on data that can be sorted into some ordering. It can also be used to retrieve data in sorted order. B-tree indexes are suitable for most common situations.
- **Hash**: This index type can only handle simple equality comparisons using the equal operator (=). Hash indexes are ***faster than B-tree indexes*** for simple equality queries, but they ***do not support range queries or ordering***.
- **GiST**: This stands for **Generalized Search Tree**, and it is an infrastructure that allows implementing many different indexing strategies. GiST indexes are useful for indexing ***geometric data types and full-text searches***, as well as other complex data types.
- **SP-GiST**: This stands for ***Space-Partitioned GiST***, and it is a variant of GiST that supports partitioned search trees. SP-GiST indexes are useful for data that has a natural clustering element and is not equally balanced, such as ***geographic locations, phone numbers, IP addresses***, etc.
- **GIN**: This stands for **Generalized Inverted Index**, and it is designed for ***indexing multiple values stored in a single column, such as arrays, jsonb, hstore, and range types***. GIN indexes are good for queries that test for the presence of a value or a set of values in a column.
- **BRIN**: This stands for **Block Range Index**, and it is a very compact index that stores only summary information about each block of data in a table. BRIN indexes are useful for very large tables that have a linear sort order on some column, such as timestamps or numeric identifiers. BRIN indexes can provide significant performance benefits with minimal storage costs.

You can create an index of a specific type by using the USING clause in the CREATE INDEX statement. For example:

```sql
CREATE INDEX name ON table USING GIN (column);
```

This creates a GIN index on the column of the table.

You can also use the extension bloom to create Bloom filter indexes, which are another type of compact index that can handle queries with multiple columns and operators.

</details>

<details>
<summary><h5>Example of index in PostgreSQL</h5></summary>

To create an index on a table, you can use the CREATE INDEX command, which has the following syntax:

```sql
CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [ IF NOT EXISTS ] name ] ON [ ONLY ] table_name [ USING method ]
( { column_name | ( expression ) } [ COLLATE collation ] [ opclass [ ( opclass_parameter = value [, ... ] ) ] ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [, ...] )
[ INCLUDE ( column_name [, ...] ) ]
[ NULLS [ NOT ] DISTINCT ]
[ WITH ( storage_parameter [= value] [, ... ] ) ]
[ TABLESPACE tablespace_name ]
[ WHERE predicate ]
```

Example of an index in PostgreSQL:

```sql
CREATE INDEX my_index ON my_table (column1, column2);
```

This statement creates an index on the `column1` and `column2` columns of the `my_table` table. The index will be sorted by the values of `column1` and `column2` in ascending order.

Here is another example:

```sql
CREATE UNIQUE INDEX my_unique_index ON my_table (column1);
```

This statement creates a unique index on the `column1` column of the `my_table` table. This means that no two rows in the table can have the same value for `column1`.

To see how indexes are used by the database, you can use the `EXPLAIN` statement. For example, the following statement will show you how the `my_index` index is used by the following query:

```sql
EXPLAIN SELECT * FROM my_table WHERE column1 = 'value1' AND column2 = 'value2';
```

The `EXPLAIN` statement will show you the query plan, which is a diagram of how the database will execute the query. The query plan will show you how the index is used, if it is used at all.

</details>