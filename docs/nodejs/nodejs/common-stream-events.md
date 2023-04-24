---
sidebar_position: 1000
sidebar_label: Nodejs Stream Events & Functions
title: Nodejs Stream Events & Functions
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Common Events & Functions of Stream in Nodejs</h5></summary>

Here are tables that list some of the common events and functions for Node.js Readable streams and Writable streams:

#### Readable Stream Events:

| Event | Description |
| --- | --- |
| `readable` | Emitted when data is ready to be read from the stream. |
| `data` | Emitted when data is read from the stream. |
| `end` | Emitted when the stream has no more data to read. |
| `error` | Emitted if there is an error reading data from the stream. |
| `close` | Emitted when the stream is closed. |
| `pause` | Emitted when the stream is paused. |
| `resume` | Emitted when the stream is resumed. |
| `readableend` | Emitted when the `end()` method is called on the readable stream. |
| `readableerror` | Emitted when an error occurs reading from the stream. |

#### Writable Stream Events:

| Event | Description |
| --- | --- |
| `drain` | Emitted when the stream is ready to receive more data after previously being write-blocked. |
| `error` | Emitted if there is an error writing data to the stream. |
| `finish` | Emitted when all data has been successfully written to the stream. |
| `pipe` | Emitted when a readable stream is piped to the writable stream. |
| `unpipe` | Emitted when a readable stream is unpiped from the writable stream. |

#### Readable Stream Functions:

| Function | Description |
| --- | --- |
| `read([size])` | Read `size` bytes of data from the stream (or as much as is currently available if `size` is omitted). |
| `setEncoding()` | Set the encoding of the data emitted from the stream. |
| `pause()` | Pause emitting the `data` event. |
| `resume()` | Resume emitting the `data` event. |
| `isPaused()` | Check if the stream is paused. |
| `pipe(dest)` | Pipe the output of the stream to a writable stream (`dest`). |
| `unpipe(dest?)` | Stop piping the output of the stream to a writable stream (`dest`), or stop all piping if no `dest` is specified. |
| `unshift(chunk)` | Push a chunk of data back onto the stream's internal buffer (useful when implementing parsing logic). |
| `wrap(stream)` | Wrap an old-style stream (that emits `data`, `end`, and `error` events) to make it compatible with the new-style `Readable` stream. |
| `destroy([err])` | Destroy the stream, optionally with an error. |

#### Writable Stream Functions:

| Function | Description |
| --- | --- |
| `write(chunk[, encoding])` | Write `chunk` of data to the stream, optionally with `encoding`. |
| `end([chunk][, encoding])` | Signal the end of the stream, optionally writing a final `chunk` of data with `encoding`. |
| `cork()` | Enable corking of the stream. |
| `uncork()` | Flush any previously corked data on the stream. |
| `setDefaultEncoding()` | Set the default encoding of the writable stream. |
| `destroy([err])` | Destroy the stream, optionally with an error. |

</details>
