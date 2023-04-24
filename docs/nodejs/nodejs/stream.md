---
sidebar_position: 1000
sidebar_label: Nodejs Stream
title: Nodejs Stream
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Strean in Nodejs</h5></summary>

A stream is an abstract interface for working with streaming data in Node.js. There are four fundamental stream types in Node.js: **Readable**, **Writable**, **Duplex**, and **Transform** streams. 

- **A readable stream** is a source from which data can be consumed, such as a file or a network request.

```js
const fs = require("fs");
const readable = fs.createReadStream("input.txt");
```

- **A writable stream** is a destination to which data can be written, such as a file or a network response. 

```js
const fs = require("fs");
const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");
readable.pipe(writable); // pipe them together
```

- **A duplex stream** is both readable and writable, such as a TCP socket. 

```js
const { Duplex } = require('stream');

// Create a custom duplex stream
const myDuplexStream = new Duplex({
  write(chunk, encoding, callback) {
    // Process incoming data
    console.log(`Incoming data: ${chunk.toString()}`);

    // Call the callback to signal that we're done processing the data
    callback();
  },
  read(size) {
    // Generate and push some data onto the stream
    const data = Math.round(Math.random() * 100).toString();
    this.push(data);

    // If we've pushed 10 or more items, stop generating data
    if (parseInt(data) > 90) {
      this.push(null); // signal end of stream
    }
  }
});

// Pipe the stream to the console
myDuplexStream.pipe(process.stdout);

```

- **A transform stream** is a type of duplex stream that modifies the data as it passes through, such as a compression or encryption stream.

```js
const fs = require("fs");
const stream = require("stream");
const transform = new stream.Transform({
  transform(chunk, encoding, callback) {
    // convert chunk to uppercase
    const upperChunk = chunk.toString().toUpperCase();
    // push the transformed chunk to the output
    this.push(upperChunk);
    // call the callback when done
    callback(null, "Done!");
  }
});
// const readable = fs.createReadStream("input.txt");
// const writable = fs.createWriteStream("output.txt");
// readable.pipe(transform).pipe(writable);
transform.on("data", (chunk) => {
  console.log(chunk.toString());
});
transform.on("end", () => {
  console.log("End of stream");
});
transform.write("hello");
transform.write("world");
transform.end();
// Output:
// HELLO
// WORLD
// Done!
// Done!
// End of stream

```

</details>
