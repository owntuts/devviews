---
sidebar_position: 1000
sidebar_label: Kafka Implement Cluster
title: Kafka  Implement Cluster
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Kafka Implement Cluster</h5></summary>

Starting a Kafka cluster, create a topic, and use the console producer and consumer to send and receive messages. Here are the steps:

Download and extract Kafka from https://kafka.apache.org/downloads

1. **Start ZooKeeper:**

In a terminal window, type the following command to start ZooKeeper using the default ZooKeeper configuration file:

```sh
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```

2. **Start Kafka-Broker server:**

In a new terminal window, type the following command to start a Kafka broker server on Port 9092:

```sh
$ bin/kafka-server-start.sh config/server.properties
```

3. **Create a Kafka Topic:**

Create a new Kafka topic called "my-topic" with three partitions and a replication factor of three, using the following command:

```sh
# contact to a brocker
bin/kafka-topics.sh --create --topic my-topic --bootstrap-server localhost:9092 --replication-factor 3 --partitions 3
```

or

```sh
# contact to zookeeper directly (not recommended)
$ bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 3 --topic my-topic
```

4. **Start Kafka Consumer:**

Start a Kafka console consumer to consume messages from "my-topic":

```sh
$ bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic --from-beginning
```

5. **Start Kafka Producer:**

In a new terminal window, start a Kafka console producer that will send messages to "my-topic":

```sh
$ bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-topic
```

6. **Send message to kafka topic**

By default, ***each line you enter will result in a separate message being sent to the topic***. If you want to send messages with keys and values, you need to specify two additional properties: parse.key and key.separator. For example, to send messages with keys and values separated by a colon (:), you can run the following command:

```bash
kafka-console-producer.sh --topic my-topic --bootstrap-server localhost:9092 --property parse.key=true --property key.separator=:
```

Then you can enter messages like this:

```bash
key1:value1
key2:value2
key3:value3
```

:::note

- `--bootstrap-server localhost:9092` is a parameter that ***tells where to find one or more Kafka brokers*** in the cluster. The bootstrap server does not need to be a leader. You can specify multiple bootstrap servers separated by commas, such as `--bootstrap-server localhost:9092,localhost:9093` (This provides redundancy in case one of the servers is down or unreachable). After contacting to the brocker, it will contact to Zookepper to request info about leader to do the job. 

- If you are ***running Kafka on a different machine or network***, you need to replace localhost with the hostname or IP address of the Kafka broker.

-  `--broker-list localhost:9092` is deprecated version of `--bootstrap-server localhost:9092`.

:::

</details>
