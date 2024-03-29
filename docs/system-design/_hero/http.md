<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/http-versions.png) -->

<details>
<summary><h5>HTTP/1 vs HTTP/2 vs HTTP/3</h5></summary>

Imagine that you are ordering food from a restaurant. You can use different ways to communicate with the restaurant staff and get your food. These ways are like the different versions of HTTP.

- **HTTP/1**: This is like using a phone call to order your food. You ***can only talk to one person at a time***, and you have to wait for them to finish before you can talk to someone else. You also have to repeat your name and address every time you order something. This is slow and inefficient, especially if you want to order multiple items or change your order.
- **HTTP/2**: This is like using a chat app to order your food. You can ***talk to multiple people (multiple servers) at the same time*** (multiplexing), and you can send messages in any order without waiting for a reply. You also only have to give your name and address once, and they are compressed to save space. This is faster and more efficient, especially if you want to order multiple items or change your order.
- **HTTP/3**: This is ***like using a video call (i.e, QUIC (Quick UDP Internet Connections))*** to order your food. You can see and hear the people you are talking to, and they can ***see and hear you (i.e, provide a reliable and secure connection)***. You can also send messages and images in any order without waiting for a reply. You also only have to give your name and address once, and they are encrypted to protect your privacy. This is even faster and more efficient, especially if you want to see the menu or the status of your order.

![design-system](/img/interviews/design-system/http-versions.webp)

#### Here is a table that compares HTTP/1, HTTP/2, and HTTP/3:

| Feature | HTTP/1 | HTTP/2 | HTTP/3 |
|---------|--------|--------|--------|
| Format | Text-based | Binary | Binary |
| Connection | One request per connection | Multiple requests per connection | Multiple requests per connection |
| Multiplexing | No | Yes | Yes |
| Compression | No | Header compression with HPACK | Header compression with QPACK |
| Prioritization | No | Yes | Yes |
| Server push | No | Yes | Yes |
| Transport protocol | TCP | TCP | QUIC (UDP-based) |
| Encryption | Optional (HTTPS) | Optional (HTTPS) | Mandatory (HTTPS) |

Some explanations of the features are:

- Format: The format of the messages exchanged between the client and the server. Text-based means the messages are in plain text and human-readable. Binary means the messages are encoded in binary and more compact and efficient.
- Connection: The number of requests that can be sent over a single connection between the client and the server. One request per connection means each request needs a new connection, which adds overhead and latency. Multiple requests per connection means multiple requests can be sent over the same connection, which reduces overhead and latency.
- Multiplexing: The ability to send multiple requests and responses in parallel over a single connection, without blocking or waiting for each other. This improves the performance and utilization of the connection.
- Compression: The ability to reduce the size of the messages by removing redundant or unnecessary information. This reduces the bandwidth and improves the speed of the communication. Header compression refers to compressing only the headers of the messages, which contain metadata about the request and response.
- Prioritization: The ability to assign different levels of importance or urgency to different requests and responses, so that the most important ones are processed first. This improves the user experience and efficiency of the communication.
- Server push: The ability of the server to send additional resources to the client before they are requested, based on the client's initial request. This reduces the number of round trips and improves the performance of the communication.
- Transport protocol: The protocol used at the transport layer to send and receive data between the client and the server. TCP (Transmission Control Protocol) is a reliable and ordered protocol that ensures data integrity and delivery. UDP (User Datagram Protocol) is a fast and unordered protocol that does not guarantee data integrity or delivery. QUIC (Quick UDP Internet Connections) is a new protocol based on UDP that provides reliability, security, and multiplexing features for HTTP/3.
- Encryption: The ability to protect the data from eavesdropping, tampering, or modification by unauthorized parties. HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that uses TLS (Transport Layer Security) or SSL (Secure Sockets Layer) to encrypt the data. HTTP/3 requires encryption by default, while HTTP/1 and HTTP/2 can use encryption optionally.

</details>

<details>
<summary><h5>HTTP/2 Implementation in Nodejs</h5></summary>

HTTP/2 is the latest version of the Hyper Text Transfer Protocol (HTTP), which introduces many improvements and optimizations over the previous version, such as multiplexing, header compression, server push, and prioritization. HTTP/2 can enhance the performance and efficiency of web applications by reducing latency, bandwidth, and complexity.

To implement HTTP/2 in Node.js, you need to use the built-in http2 module, which provides both low-level and high-level APIs for creating HTTP/2 servers and clients. You can also use third-party libraries or frameworks that support HTTP/2, such as Express.js, Koa.js, or Fastify.

To create an HTTP/2 server in Node.js, you can use the http2.createServer() or http2.createSecureServer() methods, depending on whether you want to use plain text or encrypted communication. For example:

```js
// Import the http2 module
const http2 = require("http2");

// Create a plain text HTTP/2 server
const server = http2.createServer();

// Listen for incoming requests
server.on("stream", (stream, headers) => {
  // stream is a Duplex object that represents the request and response
  // headers is an object that contains the request headers

  // Write some response headers
  stream.respond({
    ":status": 200,
    "content-type": "text/html",
  });

  // Write some response body
  stream.end("<h1>Hello HTTP/2</h1>");
});

// Start listening on port 3000
server.listen(3000);
```

To create an HTTP/2 client in Node.js, you can use the http2.connect() method, which creates an Http2Session object that represents a persistent connection to a server. You can then use the session.request() method to create an Http2Stream object that represents a single request and response. For example:

```js
// Import the http2 module
const http2 = require("http2");

// Create a session with the server
const session = http2.connect("http://localhost:3000");

// Handle any errors in the session
session.on("error", (err) => console.error(err));

// Create a request stream
const req = session.request({
  ":path": "/",
});

// Handle any errors in the request stream
req.on("error", (err) => console.error(err));

// Handle the response headers
req.on("response", (headers) => {
  // Log the status code and content type
  console.log(headers[":status"]);
  console.log(headers["content-type"]);
});

// Handle the response body
req.setEncoding("utf8");
let data = "";
req.on("data", (chunk) => {
  // Append each chunk to the data string
  data += chunk;
});
req.on("end", () => {
  // Log the entire response body
  console.log(data);
});

// End the request stream
req.end();
```
</details>
