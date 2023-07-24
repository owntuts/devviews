<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Types of Sharding in postgresql</h5></summary>

There are two main types of sharding in PostgreSQL:

* **Horizontal sharding** divides the data into multiple partitions, each of which is stored on a separate server. This is the most common type of sharding, and it is well-suited for applications that need to scale out horizontally.
* **Vertical sharding** divides the data into multiple tables, each of which is stored on a separate server. This type of sharding is less common, but it can be useful for applications that need to scale up vertically.

In addition to these two main types, there are also a few other types of sharding that can be used with PostgreSQL:

* **Function-based sharding** divides the data based on the values of a particular function. This type of sharding can be useful for applications that need to distribute data based on some specific criteria.
* **Data-based sharding** divides the data based on the values of a particular column. This type of sharding can be useful for applications that need to distribute data based on the distribution of the data values.

The best type of sharding for you will depend on your specific needs. If you need to scale out horizontally, then horizontal sharding is a good option. If you need to scale up vertically, then vertical sharding is a good option. And if you need to distribute data based on some specific criteria, then function-based or data-based sharding may be a good option.

Here is a table summarizing the different types of sharding in PostgreSQL:

| Type | Description | Pros | Cons |
|---|---|---|---|
| Horizontal sharding | Divides the data into multiple partitions, each of which is stored on a separate server. | Scalable. | Complex to implement and manage. |
| Vertical sharding | Divides the data into multiple tables, each of which is stored on a separate server. | Efficient. | Less scalable than horizontal sharding. |
| Function-based sharding | Divides the data based on the values of a particular function. | Flexible. | Complex to implement and manage. |
| Data-based sharding | Divides the data based on the values of a particular column. | Efficient. | Less flexible than function-based sharding. |

</details>

<details>
<summary><h5>Example of Vertical Sharding in postgresql</h5></summary>

- Suppose you have a table called `customers` with the following schema and data:

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(100) NOT NULL
);

INSERT INTO customers (name, email, phone, address) VALUES
('Alice', 'alice@example.com', '123-456-7890', '123 Main Street'),
('Bob', 'bob@example.com', '234-567-8901', '456 Second Avenue'),
('Charlie', 'charlie@example.com', '345-678-9012', '789 Third Boulevard'),
('David', 'david@example.com', '456-789-0123', '012 Fourth Circle');
```

- You can vertically shard this table into two smaller tables, one with the `id`, `name`, and `email` columns, and another with the `id`, `phone`, and `address` columns. You can use foreign data wrappers (FDWs) to create foreign tables on different servers that point to the shards. For example:

```sql
-- On server 1
-- Load the postgres_fdw extension
CREATE EXTENSION postgres_fdw;

-- Create a foreign server object named shard1 that represents an external PostgreSQL server
-- Specify the host name and database name of the external server as options
CREATE SERVER shard1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'server1', dbname 'shard1_db');

-- Create a user mapping for the current user that specifies the remote user name and password to use when connecting to shard1
CREATE USER MAPPING FOR current_user SERVER shard1 OPTIONS (user 'shard1_user', password 'shard1_pass');


CREATE TABLE customers_1 (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);

INSERT INTO customers_1 (id, name, email) SELECT id, name, email FROM customers;

-- On server 2
CREATE EXTENSION postgres_fdw;
CREATE SERVER shard2 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'server2', dbname 'shard2_db');
CREATE USER MAPPING FOR current_user SERVER shard2 OPTIONS (user 'shard2_user', password 'shard2_pass');

CREATE TABLE customers_2 (
  id INT PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(100) NOT NULL
);

INSERT INTO customers_2 (id, phone, address) SELECT id, phone, address FROM customers;

-- On the original server
DROP TABLE customers;
CREATE FOREIGN TABLE customers_1 (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
) SERVER shard1;

CREATE FOREIGN TABLE customers_2 (
  id INT PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(100) NOT NULL
) SERVER shard2;
```

- Now you have vertically sharded your `customers` table into two foreign tables on different servers. You can query them separately or join them using the `id` column.

</details>

<details>
<summary><h5>Example of Horizontal Sharding in postgresql</h5></summary>

Hello, this is Bing. I'm happy to help you with your query. 😊

According to the search results, an example of horizontal sharding in PostgreSQL could be:

- Suppose you have a table called `orders` with the following schema and data:

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL
);

INSERT INTO orders (customer_id, product_id, quantity, order_date) VALUES
(1, 10, 2, '2021-01-01'),
(2, 20, 1, '2021-01-02'),
(3, 30, 3, '2021-01-03'),
(4, 40, 4, '2021-01-04'),
(5, 50, 5, '2021-01-05');
```

- You can horizontally shard this table into smaller tables based on the order_date column. For example, ***you can create one table for each month*** of the year and use range partitioning to distribute the rows. You can use foreign data wrappers (FDWs) to create foreign tables on different servers that point to the shards. For example:

```sql
-- On the original server
CREATE EXTENSION postgres_fdw;

-- Create foreign server objects for each shard server
CREATE SERVER shard1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'server1', dbname 'shard1_db');
CREATE SERVER shard2 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'server2', dbname 'shard2_db');
-- and so on for other servers

-- Create user mappings for each shard server
CREATE USER MAPPING FOR current_user SERVER shard1 OPTIONS (user 'shard1_user', password 'shard1_pass');
CREATE USER MAPPING FOR current_user SERVER shard2 OPTIONS (user 'shard2_user', password 'shard2_pass');
-- and so on for other servers

-- Create a parent table for partitioning
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL
) PARTITION BY RANGE (order_date);

-- Create foreign tables as partitions on different servers
CREATE FOREIGN TABLE orders_202101 (
  id INT PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL
) SERVER shard1 PARTITION OF orders FOR VALUES FROM ('2021-01-01') TO ('2021-02-01');

CREATE FOREIGN TABLE orders_202102 (
  id INT PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL
) SERVER shard2 PARTITION OF orders FOR VALUES FROM ('2021-02-01') TO ('2021-03-01');

-- and so on for other partitions

-- On each shard server
CREATE TABLE orders_202101 (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL CHECK (order_date >= '2021-01-01' AND order_date < '2021-02-01')
);

CREATE TABLE orders_202102 (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  order_date DATE NOT NULL CHECK (order_date >= '2021-02-01' AND order_date < '2021-03-01')
);

-- and so on for other tables

-- Insert data into the partitions
INSERT INTO orders_202101 (customer_id, product_id, quantity, order_date) VALUES
(1, 10, 2, '2021-01-01'),
(2, 20, 1, '2021-01-02'),
(3, 30, 3, '2021-01-03'),
(4, 40, 4, '2021-01-04'),
(5, 50, 5, '2021-01-05');
```

- Now you have horizontally sharded your `orders` table into smaller tables on different servers. You can query them separately or through the parent table.
- The `orders` table is a parent table that does not store any data itself, but only acts as a proxy for the partitions. When you insert data into the `orders` table, PostgreSQL will automatically route the insert to the correct partition based on the `order_date` value.

</details>