---
sidebar_position: 1000
sidebar_label: Nodejs single-thread vs multi-threads vs concurrency vs paralell
title: Nodejs single-thread vs multi-threads vs concurrency vs paralell
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>single-thread vs multi-threads vs concurrency vs paralell in Nodejs</h5></summary>

* **Single-thread:** 
> - A web server receives requests from multiple clients.
> - The server only processes each request at a time.

* **Multi-thread:**
> - A web server receives requests from multiple clients.
> - The server divides the requests into multiple tasks.
> - The server assigns each task to a different thread.
> - The threads execute the tasks concurrently. (Concurrency happen here)
> - The server returns the results of the tasks to the clients.

* **Concurrency:** Concurrency is the ability to run multiple tasks or processes at the same time. Resources of server (CPU, Memory,...) are shared among the requests. 

* **Parallelism:**
> Consider a web server that receives requests from multiple clients. If the server only has one processor, it can only process one request at a time. However, if the server has multiple processors, it can process multiple requests simultaneously. This can be done by ***dividing the requests into multiple tasks and assigning each task to a different processor***.

Here is a table that summarizes the differences between single-thread, multi-thread, concurrency, and parallel:

| Feature | Single-thread | Multi-thread | Concurrency | Parallelism |
|---|---|---|---|---|
| Number of tasks | 1 | Multiple | Multiple | Multiple |
| Focus | One task at a time | Different tasks at the same time | Different tasks at the same time | Same task at the same time |
| Speed | Slow | Faster | Faster | Fastest |

</details>
