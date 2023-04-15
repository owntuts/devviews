---
sidebar_position: 1000
sidebar_label: Kafka Pub/Sub Example
title: Kafka Pub/Sub Example
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Pub/Sub Example in Java</h5></summary>

Let's assume we have a Kafka topic named `input-topic` that contains some text messages. We want to write a Kafka Streams application that consumes these messages, ***counts the occurrences of words in each message, and produces the word counts*** to another Kafka topic named `output-topic`.

1. **Producer**: Create a producer that sends some text messages to the input-topic.

```java
// Import the required libraries
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

// Create a properties object with the required configuration
Properties producerProps = new Properties();
producerProps.put("bootstrap.servers", "localhost:9092");
producerProps.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
producerProps.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

// Create a Kafka producer with the properties
KafkaProducer<String, String> producer = new KafkaProducer<>(producerProps);

// Create some text messages as producer records
ProducerRecord<String, String> record1 = new ProducerRecord<>("input-topic", "Hello world");
ProducerRecord<String, String> record2 = new ProducerRecord<>("input-topic", "Kafka Streams is awesome");
ProducerRecord<String, String> record3 = new ProducerRecord<>("input-topic", "Baeldung is a great resource for learning");

// Send the records asynchronously and handle the response
producer.send(record1, (metadata, exception) -> {
  if (exception != null) {
    // Handle the error
    System.err.println("Failed to publish: " + exception);
  } else {
    // Handle the success
    System.out.println("Published: " + metadata);
  }
});
producer.send(record2, (metadata, exception) -> {
  if (exception != null) {
    // Handle the error
    System.err.println("Failed to publish: " + exception);
  } else {
    // Handle the success
    System.out.println("Published: " + metadata);
  }
});
producer.send(record3, (metadata, exception) -> {
  if (exception != null) {
    // Handle the error
    System.err.println("Failed to publish: " + exception);
  } else {
    // Handle the success
    System.out.println("Published: " + metadata);
  }
});

// Close the producer
producer.close();
```

2. **Kafka Streams**: Create a Kafka Streams application that consumes these messages from the `input-topic` and produces the word counts to the `output-topic`.

```java
// Import the required libraries
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;

import java.util.Arrays;
import java.util.Properties;

// Create a properties object with the required configuration
Properties streamsProps = new Properties();
streamsProps.put(StreamsConfig.APPLICATION_ID_CONFIG, "wordcount-app");
streamsProps.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
streamsProps.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());
streamsProps.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());

// Create a StreamsBuilder object
StreamsBuilder builder = new StreamsBuilder();

// Create a stream from the input-topic
KStream<String, String> input = builder.stream("input-topic");

// Apply some operations on the stream to count words
KStream<String, Long> output = input
    .flatMapValues(value -> Arrays.asList(value.toLowerCase().split("\\W+"))) // Split each message into words
    .groupBy((key, value) -> value) // Group records by word
    .count() // Count the number of records per word
    .toStream(); // Convert the result to a stream

// Send the output stream to the output-topic
output.to("output-topic");

// Create and start a KafkaStreams object
KafkaStreams streams = new KafkaStreams(builder.build(), streamsProps);
streams.start();
```

3. **Consumer**: Create a consumer that receives the word counts from the output-topic.

```java
// Import the required libraries
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

// Create a properties object with the required configuration
Properties consumerProps = new Properties();
consumerProps.put("bootstrap.servers", "localhost:9092");
consumerProps.put("group.id", "wordcount-group");
consumerProps.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
consumerProps.put("value.deserializer", "org.apache.kafka.common.serialization.LongDeserializer");

// Create a Kafka consumer with the properties
KafkaConsumer<String, Long> consumer = new KafkaConsumer<>(consumerProps);

// Subscribe to the output-topic
consumer.subscribe(Collections.singletonList("output-topic"));

// Poll for records and print them
while (true) {
  ConsumerRecords<String, Long> records = consumer.poll(Duration.ofSeconds(1));
  for (ConsumerRecord<String, Long> record : records) {
    System.out.println("Word: " + record.key() + ", Count: " + record.value());
  }
}
```
</details>
