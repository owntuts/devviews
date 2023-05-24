<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Sharding Architecture</h5></summary>

![sharding](/img/interviews/mongodb/sharding.png)

Sharding is a method for distributing data across multiple machines. It is useful when single machine can handle large modern-day workloads, by allowing you to scale horizontally.

In MongoDB, a sharded cluster consists of:

- **Shards**: Each shard contains a subset of the cluster’s data. Each shard can be deployed as a replica set.
- **Mongos**: The mongos acts as a query router for client applications, handling both read and write operations. It dispatches client requests to the relevant shards and aggregates the result from shards into a consistent client response.
- **Config servers**: Config servers store metadata and configuration settings for the cluster. The sharding metadata reflects the state and organization of the sharded data.

MongoDB shards data at the collection level, using a **shard key** to distribute the collection's documents across shards. The shard key consists of a field or multiple fields in the documents. MongoDB splits the data into **chunks**, by dividing the span of shard key values into non-overlapping ranges. MongoDB then attempts to distribute those chunks evenly among the shards in the cluster.

</details>

<details>
<summary><h5>How it works</h5></summary>

We need to index Shards with ***ranges of certain keys*** (ranged sharding) or ***hashes of keys*** (hashed sharding).

![sharding](/img/interviews/mongodb/sharding-works.png)

</details>

<details>
<summary><h5>Ranged Sharding</h5></summary>

Ranged sharding in MongoDB is a way of splitting up your data into smaller pieces called chunks and spreading them across different machines called shards. 

The process of ranged sharding: 

`Routers => Look in config servers => Get metadata about shard key ranges and chunk locations (table) => Route requests to relevant shards => Aggregate results from shards => Send response to clients.`

To use ranged sharding, you need to run a command called `sh.shardCollection()` and tell MongoDB which collection and which field you want to use as the shard key.

```sh
sh.shardCollection("users.history", { user_id : 1 } )
```

![sharding](/img/interviews/mongodb/range-sharding.png)

Some of the pros and cons of ranged sharding are:

**Pros:**

- It allows for efficient queries where reads target documents within a contiguous range.
- It is simple and easy to implement if you have a good understanding of your data and query patterns.
- It is the default sharding methodology in MongoDB if you don't have any special requirements.

**Cons:**

- It can lead to uneven distribution or hotspots if the shard key values are not well distributed or have high frequency.
- It can cause poor performance if the shard key values change monotonically (such as timestamps or auto-incrementing IDs) and create write bottlenecks on a single shard.
- It can make cross-shard queries more difficult or inefficient if the query does not include the shard key or spans multiple chunks or shards.

</details>

<details>
<summary><h5>Hashed Sharding</h5></summary>

Hashed sharding is a method for ***distributing data across a MongoDB cluster based on a hashed index*** of a shard key field. It provides a more even data distribution across the cluster than ranged sharding, but it reduces the ability to perform targeted operations on documents with close shard key values.

The process of ranged sharding: 

`look for that hash in table => find doc in what chunk`

![hashed-sharding](/img/interviews/mongodb/hashed-sharding.png)

</details>

<details>
<summary><h5>Deploy sharding</h5></summary>

To deploy sharding in MongoDB, you need to set up a sharded cluster that consists of shards, mongos and config servers.

#### 1. start config server replicaset mongodb

To start the config server replica set in MongoDB, you need to follow these steps¹:

1. Start three mongod instances on separate machines as config servers. Use the `--configsvr` and `--replSet` options to specify that the mongod instances are config servers and members of a replica set. For example, on one machine, you can use this command:

```bash
mongod --configsvr --replSet configReplSet --port 27019 --dbpath /data/configdb
```

Replace the port number and dbpath with your own values. Repeat this step for the other two machines, using different port numbers and dbpaths.

2. Connect to one of the config servers using a mongo shell and initiate the config server replica set using this command:

```javascript
rs.initiate(
   {
      _id: "configReplSet",
      configsvr: true,
      members: [
         { _id : 0, host : "config01.example.net:27019" },
         { _id : 1, host : "config02.example.net:27019" },
         { _id : 2, host : "config03.example.net:27019" }
      ]
   }
)
```

Replace the host names and port numbers with your own values.

3. Verify that the config server replica set is running by using this command:

```javascript
rs.status()
```

#### 2. Deploy - Start Shard Server Replicaset

To start the shard server replica set in MongoDB, you need to follow these steps¹:

1. Start each member of the replica set with the appropriate options. For each member, start a mongod instance with the following settings:

- Set `--shardsvr` option to indicate that the mongod instance is a shard.
- Set `--replSet` option to specify the name of the shard replica set.
- Set `--bind_ip` option to specify the hostname/ip or a comma-delimited list of hostnames/ips that remote clients can use to connect to the instance.
- Set any other settings as appropriate for your deployment.

For example, on one machine, you can use this command:

```bash
mongod --shardsvr --replSet shardReplSet --bind_ip localhost,<hostname(s)|ip address(es)>
```

Replace the hostname(s) and ip address(es) with your own values. Repeat this step for the other members of the shard replica set, using different port numbers and dbpaths.

2. Connect to one of the shard servers using a mongo shell and initiate the shard replica set using this command:

```javascript
rs.initiate(
   {
      _id: "shardReplSet",
      members: [
         { _id : 0, host : "shard01.example.net:27018" },
         { _id : 1, host : "shard02.example.net:27018" },
         { _id : 2, host : "shard03.example.net:27018" }
      ]
   }
)
```

Replace the host names and port numbers with your own values.

3. Verify that the shard server replica set is running by using this command:

```javascript
rs.status()
```

#### 3. Deploy - Start a mongos for the Sharded Cluster



</details>
