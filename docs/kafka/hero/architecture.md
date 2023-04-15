---
sidebar_position: 1000
sidebar_label: Kafka Architecture
title: Kafka Architecture
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Architecture</h5></summary>

![Kafka Architecture](/img/interviews/kafka/architecture.png)

Kafka is a distributed messaging system that can be used for real-time data streaming and processing. It is highly scalable and fault-tolerant, making it a popular choice for handling large volumes of data.

The Kafka architecture is composed of four main components:

**Producers**: A producer is responsible for sending messages to Kafka topics. It can be a standalone application that generates events or a system that collects log data from various sources.

**Brokers**: Kafka brokers are the nodes that store and manage the messages that are produced by the producers. They are responsible for maintaining the replicas of the data and distributing the messages to consumers.

**Consumers**: A consumer is responsible for subscribing to the Kafka topics, receiving and processing the messages. It can be a standalone application, a service or a system that processes events in real-time.

**Zookeeper**: Zookeeper is responsible for managing the Kafka cluster and the coordination of the brokers, producers and consumers. It provides features like leader election, configuration management, and synchronization.

In the above diagram, the producers generate messages and send them to the Kafka cluster. The cluster is composed of the brokers, which are responsible for storing and managing the messages. The Kafka cluster is managed by Zookeeper, which coordinates communication between the brokers, producers and consumers.

Consumers subscribe to specific Kafka topics and receive messages from the brokers. They can process the data and perform real-time analytics. The Kafka architecture allows for high scalability, low latency and fault tolerance, making it a popular choice for handling large volumes of data.

</details>
