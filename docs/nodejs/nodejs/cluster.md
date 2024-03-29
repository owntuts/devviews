---
sidebar_position: 1000
sidebar_label: Nodejs Cluster
title: Nodejs Cluster
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Cluster in Nodejs</h5></summary>

**Nodejs cluster** is a module that allows you to create multiple child processes that run parallelly and share the same server port. This module can be used to ***take advantage of multi-core systems*** and distribute workloads among the processes. The ***child processes have their own memory, event loop, and V8 instance, and communicate with the parent process via IPC***. The cluster module acts as a load balancer that can handle blocking code and improve performance.

![Cluster in Nodejs](/img/interviews/nodejs/cluster.png)

Here is an example of how to use nodejs cluster:

```javascript
// Import the cluster module
import cluster from 'node:cluster';
// Get the number of available CPUs
import { availableParallelism } from 'node:os';
const numCPUs = availableParallelism();

// Check if the current process is the primary process
if (cluster.isPrimary) {
  // Log the primary process ID
  console.log(`Primary ${process.pid} is running`);

  // Fork workers for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Communication to Workers
  cluster.on('fork', (worker) => {
    console.log('Primary forked worker: ', worker.id);
    worker.send({msg: 'Hello worker'});
  });

  // Listen for exit events from workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Create an HTTP server in each worker process
  import http from 'node:http';
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  // Log the worker process ID
  console.log(`Worker ${process.pid} started`);

  // Communication to Primary
  process.on('message', (msg) => {
    console.log('Worker received: ', msg);
  });

}
```

:::note
It depends on the nodejs version you are using. Nodejs cluster module supports two methods of distributing incoming connections: **round-robin** and **OS scheduling**.

You can check or change the scheduling policy by using `cluster.schedulingPolicy` property¹. The possible values are `cluster.SCHED_RR` for round-robin or `cluster.SCHED_NONE` for OS scheduling¹.

:::

</details>

<details open>
<summary><h5>Cluster Communication</h5></summary>
You can use events. There are several events that can be emitted by the cluster module. Some of them are:

- `cluster.on('fork', (worker) => {})`: This event is emitted when a new worker is forked by the primary process.
- `cluster.on('online', (worker) => {})`: This event is emitted when a worker has started and is ready to receive messages from the primary process.
- `cluster.on('listening', (worker, address) => {})`: This event is emitted when a worker is listening for connections on a server port¹. The address object contains the address, port and address type of the server.
- `cluster.on('disconnect', (worker) => {})`: This event is emitted when the IPC channel between a worker and the primary process has disconnected. This can happen when a worker calls `process.disconnect()` or exits gracefully.
- `cluster.on('exit', (worker, code, signal) => {})`: This event is emitted when a worker exits or is killed by a signal. The code and signal arguments contain the exit code and signal name of the worker process, if any.
- `cluster.on('message', (worker, message, handle) => {})`: This event is emitted when a worker sends a message to the primary process via `process.send()`. The message argument contains the message object and the handle argument contains an optional handle object for sending file descriptors.
- `cluster.on('setup', (settings) => {})`: This event is emitted when `.setupPrimary()` is called or when a new worker is forked for the first time. The settings argument contains the cluster settings object that was passed to `.setupPrimary()` or that was generated by default.

These are some of the cluster events that can be listened by the primary process. You can find more details and examples in the documentation of nodejs cluster.

#### Examples of Communication

```js
// In the primary process
// Fork workers for each CPU
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}

// Do something async and then send a message to workers
fetch('https://example.com/api')
  .then(res => res.json())
  .then(data => {
    console.log('Primary fetched data: ', data);
    // Send a message to each worker
    for (const id in cluster.workers) {
      cluster.workers[id].send({msg: 'Hello worker'});
    }
  })
  .catch(err => console.error(err));

```

```js
  // In workers
  process.on('message', (msg) => {
    console.log('Worker received: ', msg);
  });
```

:::note

You can also use socket.io or node-ipc to create a bidirectional communication channel between the processes.

:::
</details>
