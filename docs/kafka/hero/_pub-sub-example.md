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

Implement Kafka Cluster first!

#### For Publishing

1. Add the Kafka client dependency to your project. You can use a build tool like Maven or Gradle to do this. For Maven, add the following dependency to your pom.xml file:

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>2.8.0</version>
</dependency>
```

2. A Kafka producer and publish messages to a Kafka topic using Java code
```java
import org.apache.kafka.clients.producer.*;

import java.util.Properties;

public class KafkaProducerExample {

    public static void main(String[] args) {

        // create producer properties
        Properties properties = new Properties();
        properties.put("bootstrap.servers", "localhost:9092");
        properties.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        properties.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        // create a Kafka producer
        Producer<String, String> producer = new KafkaProducer<>(properties);

        // create a message to send to Kafka
        ProducerRecord<String, String> record = new ProducerRecord<>("my-topic", "key", "value");

        // send the message to Kafka
        producer.send(record);

        // close the producer
        producer.close();
    }
}
```

#### Subscribing

1. Add the Kafka client dependency to your project. You can use a build tool like Maven or Gradle to do this. For Maven, add the following dependency to your pom.xml file:

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>2.8.0</version>
</dependency>
```

2. Receive messages from a Kafka topic using a Kafka consumer

```java
import org.apache.kafka.clients.consumer.*;
import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

public class KafkaConsumerExample {

    public static void main(String[] args) {

        // create consumer properties
        Properties properties = new Properties();
        properties.put("bootstrap.servers", "localhost:9092");
        properties.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        properties.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        properties.put("group.id", "my-group-id");

        // create a Kafka consumer
        Consumer<String, String> consumer = new KafkaConsumer<>(properties);

        // subscribe to a Kafka topic
        consumer.subscribe(Collections.singleton("my-topic"));

        // receive messages from Kafka
        while (true) {
            // blocks for up to the specified duration to wait for new messages
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
            for (ConsumerRecord<String, String> record : records) {
                System.out.println("Received message: key=" + record.key() +
                        ", value=" + record.value() +
                        ", partition=" + record.partition() +
                        ", offset=" + record.offset());
            }
        }

        // close the consumer
        consumer.close();
    }
}

```

3. Now, let's use a KStream to process the messages from the topic:

```java
import org.apache.kafka.streams.*;
import org.apache.kafka.streams.kstream.KStream;
import java.util.Properties;
 
public class KafkaStreamExample {
 
    public static void main(String[] args) throws Exception{
 
        String topicName = "my-topic";
 
        Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "my-stream-processing");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, org.apache.kafka.common.serialization.Serdes.StringSerde.class);
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, org.apache.kafka.common.serialization.Serdes.StringSerde.class);
 
        StreamsBuilder builder = new StreamsBuilder();
        KStream<String, String> stream = builder.stream(topicName);
 
        // process the stream
        stream.foreach((key, value) -> System.out.println("Processed message: " + value));
          
        KafkaStreams kafkaStreams = new KafkaStreams(builder.build(), props);
        kafkaStreams.start();
    }
}

```

</details>
