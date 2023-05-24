<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Replication Architecture</h5></summary>

![Replication Architecture](/img/interviews/mongodb/replicaset.png)

MongoDB uses a **replica set** as the basic unit of replication. A replica set is a group of **mongod** instances that maintain the same data set. 

A replica set contains one **primary** node and one or more **secondary** nodes. Optionally, it can also contain one or more **arbiter** nodes.

- **The primary node** ***receives all write operations*** and records them in its **operation log**, or **oplog**. 
- **The secondary nodes** ***replicate the primary's oplog*** and apply the operations to their data sets asynchronously. The secondary nodes ***can also serve read operations***, but they may not have the most up-to-date data.
- If the primary node fails or becomes unavailable, one of the secondary nodes can hold an **election** to elect itself as the new primary. The election process ensures that there is always one and only one primary node in a replica set.
- **An arbiter node** is a special type of node that does ***not hold any data***, but ***participates in elections***. An arbiter node can ***help maintain an odd number of voting members*** in a replica set, which is necessary for electing a primary.

</details>

<details>
<summary><h5>Some notes about replica set</h5></summary>

- A replica set can have ***up to 50 members***, but ***only 7 members can vote*** in elections.
- A replica set can have ***only one primary node at a time***, and it must have a majority of voting members online to elect or maintain a primary node.
-  A replica set ***should have an odd number of voting members***. If a replica set has an even number of voting members, and half of them vote for one candidate and half of them vote for another candidate, then there is no clear winner and the election fails.
- A replica set can have different types of secondary nodes, such as hidden nodes, delayed nodes, or non-voting nodes, for different purposes.
- A replica set can use authentication and encryption to secure the communication between the members.
- A replica set can use tags to group the members by location, function, or hardware configuration. Tags can be used to control read preferences and write concerns.

</details>

<details>
<summary><h5>Read and write concern in replica set</h5></summary>

Read and write concern in replica set are options that allow you to control the consistency and durability of the data read and written from replica sets.

- To read data from the primary node only, you can use the following read concern:

```json
{ readConcern: { level: "local" } }
```

- To read data that has been acknowledged by a majority of the replica set members, you can use the following read concern:

```json
{ readConcern: { level: "majority" } }
```

- To read data that reflects all successful writes issued with a majority write concern and that are acknowledged by the current primary node, you can use the following read concern:

```json
{ readConcern: { level: "linearizable" } }
```

- To read data from any available replica set member, regardless of whether the data may be rolled back or not, you can use the following read concern:

```json
{ readConcern: { level: "available" } }
```

- To read data from a specific point in time that reflects the majority committed state of the data, you can use the following read concern:

```json
{ readConcern: { level: "snapshot" } }
```

![write concern](/img/interviews/mongodb/write-concern.png)

- To write data to the primary node only, you can use the following write concern:

```json
{ writeConcern: { w: 1 } }
```

- To write data to a majority of the replica set members, you can use the following write concern:

```json
{ writeConcern: { w: "majority" } }
```

- To write data to at least three replica set members, you can use the following write concern:

```json
{ writeConcern: { w: 3 } }
```

- To write data to a specific set of replica set members that have a certain tag, you can use the following write concern:

```json
{ writeConcern: { w: "<tag>" } }
```

- To write data with a timeout of 10 seconds, you can use the following write concern:

```json
{ writeConcern: { w: "majority", wtimeout: 10000 } }
```

:::note

A majority of the replica set members is the smallest number of members that constitutes more than half of the voting members in the replica set. For example, if a replica set has 5 voting members, a majority is 3. If a replica set has 6 voting members, a majority is 4.

:::

:::note

You can specify read and write concerns for the following commands in MongoDB:

- For read operations, you can use the **find**, **aggregate**, **count**, **distinct**, **geoNear**, and **geoSearch** commands with the **readConcern** option.
- For write operations, you can use the **insert**, **update**, **delete**, and **findAndModify** commands with the **writeConcern** option.
- For other commands that support read or write concerns, you can use the **db.runCommand()** method with the **readConcern** or **writeConcern** option. For example, you can use the **createIndexes** command with the **writeConcern** option as follows:

```json
db.runCommand( {
   createIndexes: "products",
   indexes: [
      { key: { item: 1 }, name: "item_1" }
   ],
   writeConcern: { w: "majority" }
} )
```

:::

</details>

<details>
<summary><h5>Types of secondary nodes</h5></summary>

You can configure a secondary member for a specific purpose. You can configure a secondary to:

- **Priority 0 Node**: In MongoDB, The higher the priority, the more likely a node is to become the primary. The default priority is 1, and you can set it to any value between 0 and 1000. To prevent a node from becoming a primary in an election, which allows it to reside in a secondary data center or to serve as a cold standby. These are called **priority 0** replica set members.
- **Hidden Node**: Prevent applications from reading from it, which allows it to run applications that require separation from normal traffic (***running in background***). These are called **hidden** replica set members (usually, ***use for analytics***).
- **Delayed Node**: Keep a ***running "historical" snapshot*** for use in recovery from certain errors, such as unintentionally deleted databases. These are called **delayed** replica set members.

</details>

<details>
<summary><h5>Deploy replicaset in mongodb</h5></summary>

First of all, to deploy a replica set in MongoDB, you need to ***have at least three mongod instances*** running on separate machines or on the same machine with different ports.

For example, if you have three mongod instances running on localhost with ports `27017`, `27018`, and `27019`, and you want to create a replica set named `rs0`, you can do the following steps:

- Start each mongod instance with the `--replSet rs0` option. For example:

```sh
mongod --port 27017 --dbpath /data/db1 --replSet rs0
mongod --port 27018 --dbpath /data/db2 --replSet rs0
mongod --port 27019 --dbpath /data/db3 --replSet rs0
```

- Connect to one of the mongod instances with mongosh. For example:
```sh
mongosh --port 27017
```

- Initiate the replica set with the rs.initiate () command. For example:
```sh
rs.initiate ()
```
- Add the other members to the replica set with the rs.add () command. For example:
```sh
rs.add ("localhost:27018")
rs.add ("localhost:27019")
```
- Check the status of the replica set with the rs.status () command. For example:
```sh
rs.status ()
```
- connect to replicaset using nodejs

```javascript
var mongoose = require ('mongoose');
var uri = 'mongodb://user:pass@host1:port1,host2:port2/dbname?replicaSet=rsname';
var options = {
  db: { native_parser: true },
  replset: {
    auto_reconnect:false,
    poolSize: 10,
    socketOptions: {
      keepAlive: 1000,
      connectTimeoutMS: 30000
    }
  },
  server: {
    poolSize: 5,
    socketOptions: {
      keepAlive: 1000,
      connectTimeoutMS: 30000
    }
  }
};
mongoose.connect (uri, options);
```
</details>
