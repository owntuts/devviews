---
sidebar_position: 1000
sidebar_label: Nodejs Worker Thread
title: Nodejs Worker Thread
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Worker Thread in Nodejs</h5></summary>

Worker threads are a way to ***run JavaScript code in parallel using multiple threads***. They are similar to web workers in browsers, but they can also use some nodejs-specific features like file system access. Worker threads can communicate with each other and with the main thread using the `postMessage` and `on` methods of the `Worker` and `parentPort` objects. For example, you can create a worker thread and send a message to it like this:

```javascript
// In the main thread
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js'); // create a worker thread from a file
worker.postMessage('Hello worker'); // send a message to the worker
```

And you can receive the message from the worker like this:

```javascript
// In the worker thread
const { parentPort } = require('worker_threads');
parentPort.on('message', (msg) => { // listen for messages from the main thread
  console.log('Worker received: ', msg); // print the message
});
```

Similarly, you can send a message from a worker to the main thread like this:

```javascript
// In the worker thread
const { parentPort } = require('worker_threads');
parentPort.postMessage('Hello main'); // send a message to the main thread
```

And you can receive the message from the main thread like this:

```javascript
// In the main thread
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js'); // create a worker thread from a file
worker.on('message', (msg) => { // listen for messages from the worker
  console.log('Main received: ', msg); // print the message
});
```

These are some examples of worker threads communication in nodejs. You can find more details and examples in the documentation of nodejs worker threads.

</details>
