<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![CAP](/img/interviews/design-system/CAP.png) -->

<details open>
<summary><h5>Trade-off Theorems</h5></summary>

Here are some common trade-off theorems in database design:

- **The CAP Theorem**: This theorem states that it is impossible for a **distributed computer system** to simultaneously provide all three guarantees of consistency, availabilty , and partition tolerance. Database designers must therefore make trade-offs between these three attributes.

- **The ACID Properties Theorem**: This theorem states that **transactions** in a database must satisfy four properties: Atomicity, Consistency, Isolation, and Durability. While these properties ensure data integrity, they can come at the cost of performance and scalability.

- **The Normalization vs**. Performance Trade-Off: Normalization is used in database design to eliminate data redundancy and improve data consistency. However, normalized databases can result in complex queries and lower performance. Database designers must therefore make trade-offs between normalization and performance.

- **The Denormalization Trade-Off**: Denormalization involves adding redundant data to a database to improve performance. However, this can result in data inconsistencies and higher storage requirements. Database designers must therefore trade-off between denormalization and data consistency.

- **The Indexing Trade-Off**: Indexing improves query performance, but it comes at the cost of increased storage and slower write times. Database designers must therefore make trade-offs between query speed and write performance.

- **The Sharding Trade-Off**: Sharding is used to distribute data across multiple nodes to improve scalability, but it comes at the cost of increased complexity and higher latency due to network communication. Database designers must therefore trade-off between scalability and complexity.

- **The Security vs. Performance Trade-Off**: The addition of security measures such as encryption can negatively impact database performance. However, insufficient security measures can result in data breaches and compromise data integrity. Database designers must therefore make trade-offs between security and performance.

These are just a few examples of trade-off theorems in database design. Understanding these trade-offs is important in making informed decisions about database design and in optimizing database performance and scalability without compromising data integrity.

</details>

<details>
<summary><h5>ACID</h5></summary>

The ACID properties theorem is a set of principles that ***ensure the reliability and correctness of database transactions***. ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties are explained below:

- **Atomicity** means that a transaction is ***either completed in full or not*** executed at all. This ensures that the database is not left in an inconsistent state due to partial updates or failures. For example, if you transfer money from one account to another, either both accounts are updated or none of them are. In SQL, you can use the `BEGIN TRANSACTION`, `COMMIT`, and `ROLLBACK` statements to control the atomicity of a transaction. For example:

```sql
-- Start a transaction
BEGIN TRANSACTION;

-- Transfer 100 from account A to account B
UPDATE Accounts SET balance = balance - 100 WHERE id = 'A';
UPDATE Accounts SET balance = balance + 100 WHERE id = 'B';

-- Check if any error occurred
IF @@ERROR <> 0
    -- Rollback the transaction if there is an error
    ROLLBACK;
ELSE
    -- Commit the transaction if there is no error
    COMMIT;
```

- **Consistency** means that a transaction preserves the ***integrity and validity of the data according to the defined rules and constraints***. This ensures that the database is always in a consistent state before and after the transaction. For example, if you have a rule that the balance of an account cannot be negative, a transaction that violates this rule will not be allowed. In SQL, you can use the `CHECK` constraint to enforce consistency rules on the data. For example:

```sql
-- Create a table with a CHECK constraint
CREATE TABLE Accounts (
    id VARCHAR(10) PRIMARY KEY,
    balance INT CHECK (balance >= 0) -- Balance cannot be negative
);

-- Insert some valid data
INSERT INTO Accounts VALUES ('A', 500);
INSERT INTO Accounts VALUES ('B', 300);

-- Try to insert some invalid data
INSERT INTO Accounts VALUES ('C', -100); -- This will fail
```

- **Isolation** means that a ***transaction is executed independently*** from other concurrent transactions and does not interfere with them. This ensures that the database is not affected by the intermediate states of other transactions. For example, if two transactions are reading and writing to the same data, ***they will not see each other's changes until they are committed***. In SQL, you can use the `SET TRANSACTION ISOLATION LEVEL` statement to specify how isolated a transaction is from other transactions. For example:

```sql
-- Set the isolation level to serializable
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Start a transaction
BEGIN TRANSACTION;

-- Read some data
SELECT * FROM Accounts WHERE id = 'A';

-- Update some data
UPDATE Accounts SET balance = balance + 50 WHERE id = 'A';

-- Commit the transaction
COMMIT;
```

- **Durability** means that a transaction's changes are ***permanent and persistent even in the event of system failures or crashes***. This ensures that the database does not lose any data due to power outages, errors, or other mishaps. For example, if you update your profile information, it will not be lost even if your computer shuts down unexpectedly. In SQL, durability is ***achieved by writing the changes to disk or other non-volatile storage devices after committing the transaction***. The database system also ***maintains a log of all transactions*** and their states, so that it can recover from any failures by replaying or undoing the transactions.

</details>

<details>
<summary><h5>CAP</h5></summary>

The CAP theorem is a concept that describes the trade-offs between three properties of distributed systems: Consistency, Availability, and Partition tolerance. It states that it is ***impossible for a distributed system to guarantee all three properties at the same time***, and that only two of them can be achieved simultaneously.

- **Consistency** means that ***all nodes in the system see the same data at the same time***, no matter which node they connect to. 
- **Availability** means that ***every request to the system receives a response***, even if one or more nodes are down. 
- **Partition** tolerance means that the ***system can continue to operate even if some nodes are isolated by network failures***.

***When a network partition occurs, the system has to choose between consistency or availability***. If it chooses consistency, it will return an error or a timeout if some data cannot be guaranteed to be up-to-date. If it chooses availability, it will return a response with possibly stale data.

#### Some examples of distributed systems that follow the CAP theorem are:

![CAP](/img/interviews/design-system/CAP.png)

- **CP systems**: These systems prioritize consistency and partition tolerance over availability. They ensure that all nodes have the same data, but they may become unavailable during network partitions. Examples of CP systems are MongoDB, HBase, Redis, and ZooKeeper.
- **AP systems**: These systems prioritize availability and partition tolerance over consistency. They ensure that all nodes are always reachable, but they may return outdated data. Examples of AP systems are Cassandra, CouchDB, DynamoDB, and Riak.
- **CA systems**: These systems prioritize consistency and availability over partition tolerance. They ensure that all nodes have the same data and are always reachable, but they cannot handle network partitions. Examples of CA systems are MySQL, PostgreSQL, Oracle, and SQL Server.

#### More Details

When something happens => DB system decide what to do
* **MySQL**: MySQL can be CP or CA depending on the configurations. By default, it is CA because it follows a master slave paradigm which data is replicated to the slaves.
    - CA: To make sure C and A => must have enough live nodes to serve all the data => but if not, cluster will shutdown => not P.
    - CP: network fails => slaves loses the connection to the master => decides to elect a new master => system becomes unavailable.

* **MongoDB**: Respect to CP over A so it's CP:
    - Primary node goes down: system becomes unavailable while a new primary is selected.
    - Primary node is disconnected from too many Secondary nodes: system becomes unavailable. Other secondaries likely elect a new Primary while the primary steps down.

* **Cassandra**: is a good example of an AP system. If a network partition occurs, Cassandra will ***continue to operate even if some of the nodes in the system are partitioned from the rest***. However, this also means that there may be times when the data in Cassandra is not consistent, some clients may see the new record, while others may not.


</details>
