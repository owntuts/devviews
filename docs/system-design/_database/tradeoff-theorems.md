<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![abstract-factory](/img/interviews/design-system/abstract-factory.svg) -->

<details open>
<summary><h5>Trade-off Theorems</h5></summary>

Here are some common trade-off theorems in database design:

- **The CAP Theorem**: This theorem states that it is impossible for a distributed computer system to simultaneously provide all three guarantees of consistency, availabilty , and partition tolerance. Database designers must therefore make trade-offs between these three attributes.

- **The ACID Properties Theorem**: This theorem states that transactions in a database must satisfy four properties: Atomicity, Consistency, Isolation, and Durability. While these properties ensure data integrity, they can come at the cost of performance and scalability.

- **The Normalization vs**. Performance Trade-Off: Normalization is used in database design to eliminate data redundancy and improve data consistency. However, normalized databases can result in complex queries and lower performance. Database designers must therefore make trade-offs between normalization and performance.

- **The Denormalization Trade-Off**: Denormalization involves adding redundant data to a database to improve performance. However, this can result in data inconsistencies and higher storage requirements. Database designers must therefore trade-off between denormalization and data consistency.

- **The Indexing Trade-Off**: Indexing improves query performance, but it comes at the cost of increased storage and slower write times. Database designers must therefore make trade-offs between query speed and write performance.

- **The Sharding Trade-Off**: Sharding is used to distribute data across multiple nodes to improve scalability, but it comes at the cost of increased complexity and higher latency due to network communication. Database designers must therefore trade-off between scalability and complexity.

- **The Security vs. Performance Trade-Off**: The addition of security measures such as encryption can negatively impact database performance. However, insufficient security measures can result in data breaches and compromise data integrity. Database designers must therefore make trade-offs between security and performance.

These are just a few examples of trade-off theorems in database design. Understanding these trade-offs is important in making informed decisions about database design and in optimizing database performance and scalability without compromising data integrity.

</details>
