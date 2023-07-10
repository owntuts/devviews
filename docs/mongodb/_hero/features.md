<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Features of MongoDB</h5></summary>

MongoDB is a **NoSQL document database** that allows you to store and query data in a flexible and scalable way. Some of the key features of MongoDB are:

- **Support for ad hoc queries**: You can perform complex queries on your data using the MongoDB Query Language (MQL), which supports field queries, range queries, regular expression searches, and user-defined functions.
- **Indexing**: You can create indexes on any field or combination of fields in your documents to improve the performance of your queries. MongoDB also supports **text indexes**, **geospatial indexes**, **hashed indexes**, and more.
- **Replication**: You can set up a replica set of multiple MongoDB servers that keep copies of the same data and provide high availability and fault tolerance. Replica sets also allow you to perform read operations from secondary servers to balance the load.
- **Sharding**: You can distribute your data across multiple shards, or partitions, of your database to achieve horizontal scaling and handle large amounts of data. Sharding also helps with load balancing and data locality.
- **Aggregation**: You can perform data analysis and transformation operations using the aggregation framework, which allows you to group, filter, project, sort, and manipulate your data using pipelines of stages.
- **Special collection and index types**: It supports time-to-live (TTL) collections for data that should expire at a certain time.
- **File storage**: It supports an easy-to-use protocol for storing large files and file metadata.

</details>

<details>
<summary><h5>When to use MongoDB?</h5></summary>

MongoDB is a document database that can be used for a variety of applications that need flexibility, scalability, and performance. MongoDB is especially suitable for the following scenarios:

- **E-commerce product catalog**: MongoDB can store complex and dynamic product data, such as attributes, reviews, ratings, images, etc. MongoDB can also support fast and flexible search and aggregation queries on the product catalog.
- **Blogs and content management**: MongoDB can store rich and diverse content, such as text, images, videos, comments, tags, etc. MongoDB can also handle high traffic and concurrent updates on the content.
- **Real-time analytics and high-speed logging**: MongoDB can ingest and process large volumes of data in real time, such as clickstream data, sensor data, social media data, etc. MongoDB can also provide fast and complex analytics on the data using the aggregation framework or MapReduce.
- **Configuration management**: MongoDB can store configuration data for various applications and environments, such as servers, networks, devices, etc. MongoDB can also support dynamic schema changes and maintain consistency across the configurations.
- **Maintaining location-based data**: MongoDB can store geospatial data, such as points, lines, polygons, etc. MongoDB can also perform geospatial queries and calculations, such as finding nearby locations, measuring distances, or intersecting regions.
- **Mobile and social networking sites**: MongoDB can store user profiles, preferences, interactions, messages, etc. MongoDB can also scale horizontally to handle large numbers of users and data growth¹³.
- **Evolving data requirements**: MongoDB can store data that has no predefined schema or that changes over time. MongoDB can also support schema validation and evolution without downtime or performance impact.
- **Loosely coupled objectives**: MongoDB can store data that is not tightly related or dependent on other data. MongoDB can also support embedding or linking of documents to optimize performance and flexibility.

These are some of the common use cases where MongoDB can be a good choice. However, there may be other situations where MongoDB is not the best fit, such as highly transactional systems or where the data model is designed up front. Therefore, it is important to evaluate your application requirements and compare different database options before choosing MongoDB.

</details>

<details>
<summary><h5>Equivalent to RDBMS</h5></summary>

MongoDB is a **NoSQL** database that stores data in **documents**, which are flexible and dynamic JSON-like structures. RDBMS is a **relational** database that stores data in **tables**, which are rigid and predefined structures. MongoDB and RDBMS have different ways of organizing and querying data, but they can be compared by some common terms:

- A **collection** in MongoDB is equivalent to a **table** in RDBMS. It is a group of documents that share a common schema or structure.
- A **document** in MongoDB is equivalent to a **row** or **record** in RDBMS. It is an individual unit of data that contains one or more fields and values.
- A **field** in MongoDB is equivalent to a **column** or **attribute** in RDBMS. It is a key-value pair that represents a property or characteristic of a document.
- A **primary key** in MongoDB is equivalent to a **primary key** in RDBMS. It is a unique identifier for each document in a collection. MongoDB automatically creates an `_id` field for each document, which acts as the primary key.
- A **secondary index** in MongoDB is equivalent to a **secondary index** in RDBMS. It is an additional data structure that allows faster queries on fields other than the primary key.
- A **foreign key** in RDBMS is equivalent to a **reference** or an **embedded document** in MongoDB. It is a way of linking data across different tables or collections. MongoDB does not enforce referential integrity, so it is up to the application to maintain the consistency of the references.

</details>

<details>
<summary><h5>Storage Engine</h5></summary>

The storage engine handles the ***interface between the database and the hardware*** - handles representations of the data (or metadata) that is located there, which is to say the data and indexes.
   - **The data file format**: Different storage engines can implement different types of compression, and different ways of storing the BSON for mongoDB.
   - **Format of indexes**: MongoDB uses Btrees. With MongoDB 3.0, WiredTiger will be using B+ trees


Some of the storage engines that MongoDB supports are:

- **WiredTiger**: This is the ***default storage engine*** since MongoDB 3.2. It is well-suited for most workloads and is recommended for new deployments. WiredTiger ***provides a document-level concurrency model, checkpointing, and compression, among other features***. In MongoDB Enterprise, WiredTiger also supports encryption at rest.
- **In-Memory**: This is a storage engine that is ***available in MongoDB Enterprise***. It stores data in memory rather than on disk, which provides more predictable data latencies. However, it also requires more RAM and does not persist data across restarts.
- **MMAPv1**: This is a legacy storage engine that was the ***default before MongoDB 3.2***. It ***uses memory-mapped files to map data files directly to virtual memory***. MMAPv1 provides collection-level locking and power-of-two sized allocations. MMAPv1 was removed in MongoDB 4.2.

You can check the storage engine of your MongoDB server by using the `db.serverStatus().storageEngine`.name command in the mongo shell. You can also specify the storage engine when starting mongod by using the `--storageEngine` option.

</details>

<details>
<summary><h5>Data Types in MongoDB</h5></summary>

| Data Type | Description | Example |
|---|---|---|
| **String** | A sequence of characters. | `"This is a string."` |
| **Integer** | A whole number. | `12345` |
| **Double** | A floating-point number. | `12.345` |
| **Boolean** | A value that can be either true or false. | `true` or `false` |
| **Array** | A collection of values. | `["This", "is", "an", "array"]` |
| **Object** | A collection of key-value pairs. | `{ "name": "John Doe", "age": 30 }` |
| **Null** | A value that represents the absence of data. | `null` |
| **Date** | A value that represents a point in time. | `new Date("2023-07-09T14:02:07Z")` |
| **Timestamp** | A value that represents a point in time and a sequence number. | `{ "seconds": 1657229327, "microseconds": 123456 }` |
| **Binary data** | A sequence of bytes. | `"binary data"` |
| **ObjectId** | A unique identifier that is used to identify documents in MongoDB. | `"5f07291e4a6f430001542155"` |
| **Symbol** | A string that is used to represent a named value. | `"mySymbol"` |
| **Code** | A JavaScript function that can be stored in a document. | `function myFunction() {}` |
| **Regular expression** | A pattern that can be used to match text. | `/[a-z]+/` |
| **Min/Max keys** | Used to store the minimum and maximum values of a field. | `{ "min": 1, "max": 100 }` |

</details>
