---
sidebar_position: 1000
sidebar_label: Kafka Replication
title: Kafka Replication
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Data Distribution & Replication in kafka</h5></summary>

In Kafka, **data distribution and replication** are key features that help ensure high availability, fault-tolerance, and durability.

Every Kafka topic is divided into one or more partitions, and each partition is replicated across multiple Kafka brokers. This means that each partition has multiple copies, called replicas, that are stored on different brokers for redundancy and fault-tolerance.

### Here's an overview of how data distribution and replication work in Kafka:

![Kafka Replication](/img/interviews/kafka/replication.png)

1. **Partitioning:** When a producer ***sends a message to a Kafka topic***, the message is assigned to a specific partition using a hashing algorithm based on the message's key. The partition is identified by an integer value from 0 to (number of partitions - 1).

2. **Replicating:** (Each partition is ***replicated across multiple Kafka brokers***) When a topic is created, the user sets the replication factor, which determines the number of replicas for each partition. The recommended replication factor is 3, meaning each partition has three replicas on different brokers.

    1. The replicas for each partition include a leader replica and multiple follower replicas. **The leader replica** is responsible for coordinating writes and managing the partition. **The follower replicas** replicate data from the leader and provide backup and fault-tolerance in case of a server failure.

    2. The leader replica receives the message from the producer and ***writes it to the end of the partition's log***. The message is assigned a unique offset, which represents its sequence number in the partition.

    3. ***The follower replicas replicate the messages*** written by the leader by copying the log segment files from the leader to their own log directories. Each replica maintains an offset value, indicating the last message it has replicated from the leader. Follower replicas regularly send requests to the leader to ensure they are up-to-date and do not fall behind.

3. **Data Distribution**: When a ***consumer group subscribes to a Kafka topic*** and its associated partitions, each consumer is assigned to only one partition within the same topic, ensuring parallelism for data processing. ***Consumers read messages from the partition in the order they were written***, starting from their assigned offset.

4. **Managment:** In case of a broker failure, the corresponding leader replica may fail as well. In that case, the follower ***ZooKeeper elect a new leader*** and replicate the missing data from the new leader replica.

By using the above process, Kafka provides durable, fault-tolerant, and scalable distributed messaging capabilities.

</details>
