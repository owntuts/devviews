---
sidebar_position: 1000
sidebar_label: Nodejs Worker Thread vs Cluster
title: Nodejs Worker Thread vs Cluster
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Worker Thread vs Cluster in Nodejs</h5></summary>

Cluster and worker threads are two different ways to ***run JavaScript code in parallel using nodejs***. Cluster allows you to create multiple child processes that can share the same server port and handle incoming requests in parallel. Worker threads allow you to create multiple threads within a single process that can execute JavaScript code and communicate with each other and with the main thread. Here is a summary of some of the main differences:

| Cluster | Worker Threads |
|---------|----------------|
| Uses processes | Uses threads |
| Isolated memory | Shared memory |
| IPC communication | Message passing or shared memory communication |
| Suitable for I/O-intensive workloads | Suitable for CPU-intensive workloads |
| More overhead and limitations | Less overhead and more compatibility |
| Provides fault tolerance and load balancing | Provides concurrency and memory efficiency |

This table is based on the information from the documentation of nodejs cluster and nodejs worker threads. You can find more details and examples there.

</details>
