---
sidebar_position: 1000
sidebar_label: Kafka Zookeeper Roles
title: Kafka Zookeeper Roles
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Zookeeper Roles</h5></summary>

![Kafka zookeeper](/img/interviews/kafka/zookeeper.png)

In Apache Kafka, ZooKeeper plays a vital role in managing and coordinating brokers and consumers. ZooKeeper provides distributed synchronization and coordination services and helps manage the Kafka cluster by performing the following tasks:

**Cluster Coordination**: ZooKeeper is used to elect a controller node, which is responsible for managing the overall state of the Kafka cluster. It monitors the liveness of brokers and detects broker failures. If a broker fails, the controller reassigns its partitions to other brokers. ZooKeeper also helps in leader election for partitions and keeps track of the current leaders.

**Configuration Management**: ZooKeeper maintains the configuration information for Kafka cluster. When brokers start up, they connect to ZooKeeper to get the current cluster configuration, and update it when necessary.

**Topic and Partition Management**: ZooKeeper keeps track of the list of topics, the number of partitions in each topic, and the location of partition replicas. When a new topic is created or a partition is added or deleted, ZooKeeper updates the metadata and notifies the brokers.

**Consumer Group Management**: Kafka consumers use ZooKeeper to store and retrieve their own consumption state. The consumer group coordinator, which is responsible for managing Kafka consumer groups, registers itself with ZooKeeper and receives notifications of changes to the topic partitions.

**Quota Management**: ZooKeeper manages Kafka's quota system, which limits the maximum number of messages or data size that a producer or consumer can send or fetch.

Without ZooKeeper, Kafka would not be able to operate as a distributed system since it plays a critical role in managing and coordinating the Kafka cluster. Overall, ZooKeeper serves as an important coordination layer for Kafka, enabling efficient and effective communication between different components of a Kafka cluster.

</details>
