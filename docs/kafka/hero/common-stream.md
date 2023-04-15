---
sidebar_position: 1000
sidebar_label: list of common stream operations
title: list of common stream operations
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>List of common stream operations</h5></summary>

Kafka Streams provides a high-level DSL (Domain Specific Language) that lets you define common stream processing operations such as ***filtering, mapping, joining, or aggregating*** on data streams.

Here are some examples of these operations:

- **filter**: Filters records from a stream or table based on a predicate function. For example, if we have a stream of messages with keys and values as strings, we can filter out records that have a null value or a negative key:

```java
// Create a stream from a Kafka topic
KStream<String, String> input = builder.stream("input-topic");

// Filter out records with null value or negative key
KStream<String, String> output = input.filter((key, value) -> value != null && !key.startsWith("-"));

// Send the output stream to another Kafka topic
output.to("output-topic");
```

The input and output of this operation are both streams.

- **map**: Transforms each record from a stream or table by applying a mapper function. For example, if we have a stream of messages with keys and values as strings, we can map a record's value to its length or its key to its hash code:

```java
// Create a stream from a Kafka topic
KStream<String, String> input = builder.stream("input-topic");

// Map the value to its length and the key to its hash code
KStream<Integer, Integer> output = input.map((key, value) -> new KeyValue<>(key.hashCode(), value.length()));

// Send the output stream to another Kafka topic
output.to("output-topic");
```

The input and output of this operation are both streams.

- **join**: Joins two streams or tables based on a common key and a joiner function. For example, if we have a stream of customer orders and a table of customer profiles, we can join them by customer ID and enrich the order records with profile information:

```java
// Create a stream from a Kafka topic
KStream<String, Order> orders = builder.stream("orders-topic");

// Create a table from another Kafka topic
KTable<String, Profile> profiles = builder.table("profiles-topic");

// Join the stream and the table by customer ID and add profile information to order records
KStream<String, EnrichedOrder> output = orders.join(profiles,
    (order, profile) -> new EnrichedOrder(order.getId(), order.getAmount(), profile.getName(), profile.getAddress()));

// Send the output stream to another Kafka topic
output.to("output-topic");
```

The input of this operation is a stream and a table, and the output is a stream.

- **aggregate**: Aggregates records from a stream or table by grouping them by key and applying an aggregator function. For example, if we have a stream of clicks by user ID and URL, we can aggregate them by user ID and count the number of clicks per user:

```java
// Create a stream from a Kafka topic
KStream<String, Click> clicks = builder.stream("clicks-topic");

// Aggregate the clicks by user ID and count the number of clicks per user
KTable<String, Long> output = clicks.groupByKey().count();

// Send the output table to another Kafka topic
output.toStream().to("output-topic");
```

The input of this operation is a stream, and the output is a table.

- **`join(KStream, ValueJoiner, JoinWindows)`**: This operation joins two KStreams based on their keys and a window specification. It returns a new KStream that contains pairs of values from both streams for each matching key within the window. For example, if you have two streams of user clicks and purchases, you can join them to get pairs of clicks and purchases for each user within a certain time interval.

```java
// Assume we have two KStreams of user clicks and purchases
KStream<String, String> clicks = ...; // key: user, value: click
KStream<String, String> purchases = ...; // key: user, value: purchase

// Define a join window of 10 seconds
JoinWindows joinWindow = JoinWindows.of(Duration.ofSeconds(10));

// Define a value joiner that concatenates the values
ValueJoiner<String, String, String> valueJoiner = (click, purchase) -> click + " -> " + purchase;

// Join the two streams on the user key and print the result
KStream<String, String> joined = clicks.join(purchases, valueJoiner, joinWindow);
joined.foreach((user, value) -> System.out.println(user + ": " + value));
```
```
Input:
  clicks: (user1, click1), (user2, click2), (user1, click3), (user3, click4)
  purchases: (user1, purchase1), (user2, purchase2), (user3, purchase3), (user1, purchase4)
Output:
  user1: click1 -> purchase1 user2: click2 -> purchase2 user1: click3 -> purchase4 user3: click4 -> purchase3
```

- **`groupBy`**: This operation splits a stream into sub-streams based on a key function. It returns a KGroupedStream object that can be further aggregated or windowed. For example, if you have a stream of words, you can group them by their length to get sub-streams of words with the same length.

```java
// Assume we have a KStream of words
KStream<String, String> words = ...; // key: null, value: word

// Define a key function that returns the word length
KeyValueMapper<String, String, Integer> keyFunction = (key, word) -> word.length();

// Group the words by their length and print the result
KGroupedStream<Integer, String> grouped = words.groupBy(keyFunction);
grouped.foreach((length, word) -> System.out.println(length + ": " + word));
```
```
Input:
  words: "hello", "world", "kafka", "streams", "java"
Output:
  grouped: 5 -> ("hello", "world", "kafka"), 6 -> ("streams"), 4 -> ("java")
```

- **`reduce`**: This operation applies a reducer function to each sub-stream of a KGroupedStream and returns a KTable that contains the latest reduced value for each key. For example, if you have a KGroupedStream of user ratings for movies, you can reduce them to get the average rating for each movie³.

```java
// Assume we have a KGroupedStream of user ratings for movies
KGroupedStream<String, Integer> ratings = ...; // key: movie, value: rating

// Define a reducer function that computes the average rating
Reducer<Integer> reducer = (oldValue, newValue) -> (oldValue + newValue) / 2;

// Reduce the ratings by movie and print the result
KTable<String, Integer> reduced = ratings.reduce(reducer);
reduced.toStream().foreach((movie, rating) -> System.out.println(movie + ": " + rating));
```
```
Input:
  ratings: movie1 -> (user1, 4), movie2 -> (user2, 5), movie1 -> (user3, 3), movie2 -> (user4, 4), movie1 -> (user5, 5)
Output:
  reduced: movie1 -> 4, movie2 -> 4.5
```

- **`windowedBy`**: This operation applies a window specification to a KGroupedStream and returns a TimeWindowedKStream or SessionWindowedKStream that contains the records for each key within the window. For example, if you have a KGroupedStream of user actions on a website, you can window them by time to get the actions for each user within a certain time interval.

```java
// Assume we have a KGroupedStream of user actions on a website
KGroupedStream<String, String> actions = ...; // key: user, value: action

// Define a time window of 10 seconds
TimeWindows timeWindow = TimeWindows.of(Duration.ofSeconds(10));

// Window the actions by user and time and print the result
TimeWindowedKStream<String, String> windowed = actions.windowedBy(timeWindow);
windowed.foreach((windowedKey, action) -> {
  String user = windowedKey.key();
  Window window = windowedKey.window();
  System.out.println(window + ": " + user + ": " + action);
  });
```
```
Input:
  actions: user1 -> "login", user2 -> "search", user1 -> "view", user3 -> "login", user2 -> "buy", user1 -> "logout"
Output:
  windowed: [0s-10s] -> user1 -> ("login", "view"), user2 -> ("search"), user3 -> ("login")
            [10s-20s] -> user2 -> ("buy"), user1 -> ("logout")
```

</details>
