---
sidebar_position: 1000
sidebar_label: Kafka kstream vs ktable
title: Kafka kstream vs ktable
tags:
  - Kafka Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>kstreamvsktable.md</h5></summary>

- **KStream** is used ***for processing continuous data streams***, such as real-time log aggregation, and converts data into a stream of keys and values. KStream supports updating the output with each new message with the same key. However, KStream does ***not support direct querying***, as it's meant for processing and forwarding.

- **KTable**, on the other hand, is used for ***maintaining the latest snapshot of data per key***, such as aggregating data by key or maintaining a session window. It ***uses a local state store to enable lookups and joins***, and stores the latest value per key as change updates. KTable supports direct querying of the latest value per key.

| Feature | KStream | KTable |
| --- | --- | --- |
| Data type | Stream of keys and values | Table of keys and values |
| Update semantics | Each new message with same key results in updated output | Latest value per key will be stored as change updates |
| State store | Not possible to leverage state store | Uses local state store to enable lookups and joins |
| Querying | No direct querying – meant for processing and forwarding | Direct querying of the latest value per key |
| Use case | Real-time data processing and event-driven applications | Maintaining the latest snapshot of data per key |
| Example | Continuous data streams, real-time log aggregation | Aggregating data by key, maintaining a session window, etc. |

In summary, KStream is suitable for real-time data processing and event-driven applications, while KTable is used for maintaining the latest snapshot of data per key that can be queried.
</details>
