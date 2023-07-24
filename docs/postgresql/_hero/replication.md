<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Types of Replications in postgresql</h5></summary>

PostgreSQL supports two main types of replication:

| Type | Description | Pros | Cons |
|---|---|---|---|
| Synchronous replication | Data is written to both the primary and secondary servers at the same time. | Highest level of data consistency. | Performance overhead. |
| Asynchronous replication | Data is written to the primary server first, and then the secondary server applies the changes. | Less performance overhead than synchronous replication. | Window of time where data may be out of sync. |

PostgreSQL also supports two other types of replication:

| Type | Description | Pros | Cons |
|---|---|---|---|
| Streaming (physical) replication	| WAL records are sent from the primary server to the standby server as they are generated. Entire database (tables, indexes, and data) cluster is replicated.|	Efficient.|	Scalable.|
| Logical replication | Data is replicated on a per-table basis. | Flexibility to replicate only a subset of data. | More complex to set up than streaming replication. |
| File-based replication | WAL files are copied from the primary server to the secondary server. | Simple to set up. | Less scalable than streaming replication. |

</details>

<details>
<summary><h5>Streaming Replication</h5></summary>

In streaming replication, the **primary server** sends `WAL` (Write-Ahead Log) records to the **standby server (Slave Server)** as they are generated. The standby server then applies these changes to its own database cluster. This ensures that the standby server is always up-to-date with the primary server.

Here are the steps to configure streaming replication in PostgreSQL 13, as outlined in the article you linked:

1. **Prepare the environment.** Make sure that both the primary and standby servers are running PostgreSQL 13 or later. You will also need to create a user account on both servers that has the `replication` privilege.
2. **Configure the primary server.** On the primary server, set the `wal_level` parameter to `replica`. This will tell PostgreSQL to generate WAL (Write-Ahead Log) records for all changes to the database.
3. **Enable archive mode.** In order to stream WAL files to the standby server, you need to enable archive mode on the primary server. You can do this by running the following command:

```
pg_ctl archive on
```

4. **Configure the standby server.** On the standby server, create a directory to store the WAL files. You can then configure the standby server to connect to the primary server and start streaming WAL files. You can do this by running the following commands:

```
pg_createcluster postgres standby
pg_ctl start -D /path/to/standby/data
```

5. **Check the status of replication.** Once you have configured streaming replication, you can check the status of replication by running the following command on the standby server:

```
pg_stat_replication
```

This command will show you the status of replication, including the number of WAL files that have been received and the number of WAL files that are still pending.

</details>


<details>
<summary><h5>Logical Replication</h5></summary>

Logical replication is a method of replicating (synchronization) data at the logical level. Here are two terms that you need to understand:

* **Data synchronization** can be understood as a mechanism that helps a table (or more broadly, an object) "mimic" changes from another table. For example, when data is inserted into table A, the correct data is also inserted into table B.
* **The term "logical"** here is in contrast to the term "physical". In simple terms, logic is the top-level objects that users can interact with, such as tables and views. Physics refers to the actual objects on the disk that users cannot see (such as databases, tablespaces, and datafiles). A physical synchronization solution can be streaming replication.

Here are the steps to configure logical replication in PostgreSQL, as outlined in the article you linked:

1. **Prepare the environment.** Make sure that both the primary and standby servers are running PostgreSQL 11 or later. You will also need to create a user account on both servers that has the `replication` privilege.
2. **Configure the primary server.** On the primary server, create a **replication slot**. A replication slot is a logical channel that is used to ***send replication data to a standby server***. You can create a replication slot by running the following command:

```
CREATE REPLICATION SLOT myslot;
```

3. **Enable logical replication on the tables you want to replicate.** You can enable logical replication on a table by running the following command:

```
ALTER TABLE mytable REPLICATE;
```

4. **Configure the standby server.** On the standby server, create a publication. A **publication** is a logical ***grouping of tables that are being replicated***. You can create a publication by running the following command:

```
CREATE PUBLICATION mypublication FOR TABLE mytable;
```

5. **Start replication.** Once you have configured logical replication, you can start replication by running the following command on the standby server:

```
pg_start_replication myslot;
```

This command will start the replication process and begin sending replication data from the primary server to the standby server.

</details>

<details>
<summary><h5>File-based Replication</h5></summary>

**File-based replication** is a method of replicating data by copying WAL (Write-Ahead Log) files from the primary server to the standby server. WAL files contain a record of all changes that have been made to the database, so by copying these files, the standby server can be kept up-to-date with the primary server.

**Steps to configure file-based replication in PostgreSQL:**

1. **Prepare the environment.** Make sure that both the primary and standby servers are running PostgreSQL 10 or later. You will also need to create a user account on both servers that has the `replication` privilege.
2. **Configure the primary server.** On the primary server, set the `wal_level` parameter to `replica`. This will tell PostgreSQL to generate WAL (Write-Ahead Log) records for all changes to the database.
3. **Enable archive mode.** In order to copy WAL files to the standby server, you need to enable archive mode on the primary server. You can do this by running the following command:

```
pg_ctl archive on
```

4. **Configure the standby server.** On the standby server, create a directory to store the WAL files. You can then configure the standby server to connect to the primary server and start copying WAL files. You can do this by running the following commands:

```
pg_createcluster postgres standby
pg_ctl start -D /path/to/standby/data
```

5. **Check the status of replication.** Once you have configured file-based replication, you can check the status of replication by running the following command on the standby server:

```
pg_stat_replication
```

This command will show you the status of replication, including the number of WAL files that have been received and the number of WAL files that are still pending.

Here are some of the pros and cons of file-based replication:

**File-based replication**

* Pros:
    * Simple to set up and manage.
    * Can be used to replicate any type of data.
* Cons:
    * Can be inefficient and not scalable.
    * Can be difficult to troubleshoot.

The best type of replication for you will depend on your specific needs. If you need a simple and easy-to-manage solution, then file-based replication may be a good option. If you need a more efficient and scalable solution, then streaming replication may be a better choice.

</details>
