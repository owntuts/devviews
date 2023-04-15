---
sidebar_position: 1000
sidebar_label: Kafka Partition
title: Kafka Partition
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Topic & Partitioning in Kafka</h5></summary>

- **A topic** is like ***a log of events***. 

  - First, they are ***append only***: When you write a new message into a log, it always goes on the end. 
  - Second, they can only be ***read by seeking an arbitrary offset*** in the log, then by scanning sequential log entries. 
  - Third, events in the log are ***immutable—once something has happened***, it is exceedingly difficult to make it un-happen.

- **A partition** is a unit of distribution and replication for topics. ***Topics can have one or more partitions***, each of which is essentially an ***ordered, immutable sequence of records***. Partitions allow for the parallelism of data ingestion from producers and parallel processing of data by consumer groups.

### How it works

1. A producer sends a message to a Kafka topic
2. The message is ***written to the end*** of the partition's log & also ***assigned a unique offset*** (which is a sequential id number) that represents the message's position in the partition. 
3. Consumers can then read data from these partitions by ***specifying the topic and partition, as well as the offset*** from which they want to start reading.

Here's an example to explain how partitions work in Kafka:

![Kafka Partition](/img/interviews/kafka/partition.png)

Imagine a Kafka topic "User_Logins" with two partitions (P1, P2) and two consumers in the same consumer group. Each consumer wants to read data from the "User_Logins" topic. When a producer sends a message to the topic, it is written to one of the partitions (for example, P1). All the consumers in the same consumer group will read messages from all the partitions in the topic, but ***each consumer will only read messages from one partition at a time*** to ensure parallelism (ex, consumer group A).

If the number of consumers is less than the number of partitions, ***some consumers may fetch messages from multiple partitions*** (ex, consumer group B). By increasing the number of partitions in a topic, it is possible to increase the throughput and parallelism of data ingestion and processing.
</details>
