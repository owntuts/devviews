<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/design-system/long-polling.png) -->

<details open>
<summary><h5>Real Time Communication</h5></summary>

- **Regular polling**: The client repeatedly requests data from the server at fixed intervals, regardless of whether the server has new data or not. This is simple but inefficient and wasteful of resources.
- **Long polling**: 
Long polling reduces the number of requests and improves the responsiveness of the communication.

1. A request is sent to the server.
2. The server doesn’t close the connection until it has a message to send.
3. When a message appears – the server responds to the request with it.
4. The browser makes a new request immediately.
    
![long polling](/img/interviews/design-system/long-polling.png)

- **WebSockets**: WebSockets is a protocol that provides full-duplex communication channels over a single TCP connection. WebSockets enables bidirectional and real-time data transfer between clients and servers without the need for polling. WebSockets also supports subprotocols and extensions for further functionality.
- **Server-sent events**: 
1. A client requests a webpage from a server using regular HTTP (see HTTP above).
2. The client receives the requested webpage and executes the JavaScript on the page which opens a connection to the server.
3. The server sends an event to the client when there's new information available.

    ![Server-sent events](/img/interviews/design-system/ssev.png)

    Server-sent events also supports event types, retry logic, and message IDs.

- **Push notifications**: Push notifications are a technique that involves sending messages from a server to a client over a dedicated connection.
Server doesn't push notification to client directly but using a Push service to have more benefits for push notifications, such as cross platform, security, reliability, and analytics. A push service may use some of techniques such as WebSockets, Long polling,... to deliver push notifications to the clients.
![push-notification](/img/interviews/design-system/push-notification.jfif)

- **Streaming**: The client requests data from the server and keeps the connection open for a long time. The server sends data to the client whenever it is available, without waiting for a new request. This is more efficient than polling, but it still uses HTTP and may face some limitations or challenges.
- **WebRTC**: Web Real-Time Communication is a set of APIs that enable peer-to-peer audio, video, and data communication between browsers or devices without any plugins or intermediaries. This is a modern and powerful technique that supports high-quality and low-latency communication, but it may not be compatible with all browsers or networks.

</details>

<details>
<summary><h5>Implement Server-sent Events in JS</h5></summary>

Server-sent events (SSE) are a way of creating a persistent connection between a server and a client, so that the server can send events to the client without the client having to request them. SSE are useful for applications that need to receive real-time updates from the server, such as chat, news, or market prices.

To implement SSE in JavaScript, you need to use the **EventSource** interface, which lets you create an object that connects to a URL that generates events. For example:

```js
const evtSource = new EventSource("https://example.com/ssedemo");
```

Then, you can listen for **message** events from the server, which contain the data sent by the server. For example:

```js
evtSource.onmessage = (event) => {
  console.log("New message", event.data);
};
```

You can also listen for custom events from the server, which have a specific name and data. For example:

```js
evtSource.addEventListener("ping", (event) => {
  console.log("Ping at", event.data);
});
```

The server-side script that sends events needs to respond with the MIME type **text/event-stream** and send messages in a specific format, with **data:** followed by the message text and terminated by a pair of newlines. For example:

```php
<?php
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

echo "data: Hello world\n\n";
echo "event: ping\n";
echo "data: 1627023915\n\n";
flush();
?>
```

or if using Nodejs

```js
const http = require("http");

http.createServer((req, res) => {
  // Set the response header for SSE
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  // Send a hello message
  res.write("data: Hello world\n\n");

  // Send a ping event with the current timestamp
  res.write("event: ping\n");
  res.write(`data: ${Date.now()}\n\n`);

  // End the response
  res.end();
}).listen(8080);

```

</details>


<details>
<summary><h5>Implement Long polling in JS</h5></summary>

To implement long polling in JavaScript, you need to use the **XMLHttpRequest** or **fetch** API to send an asynchronous request to the server, and then ***wait for the response in a callback function***. The server should not close the connection until it has some data to send back to the client, or until a timeout occurs. When the client receives the response, it should process the data and then send another request to the server, repeating the process. For example:

```js
// Using fetch
function poll() {
  // Send a GET request to the server endpoint
  fetch("/poll")
    .then(function (response) {
      // Check if the request was successful
      if (response.ok) {
        // Get the data from the response as JSON
        return response.json();
      } else {
        // The request failed
        throw new Error(response.statusText);
      }
    })
    .then(function (data) {
      // Do something with the data
      console.log(data);
      // Send another request after processing the response
      poll();
    })
    .catch(function (error) {
      // An error occurred
      console.error(error);
      // Try again after some delay
      setTimeout(poll, 1000);
    });
}

// Start polling
poll();
```

To tell the server to keep the connection open until some content becomes available, or until a timeout occurs, you need to use the appropriate headers and response methods in your server-side code. For example, in Node.js, you can use something like this:

```js
const http = require("http");

http.createServer((req, res) => {
  // Set the response header for SSE
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  // Keep the connection open by sending a comment
  const keepAlive = setInterval(() => {
    res.write(":keep-alive\n\n");
  }, 15000);

  // Check for some content to send back to the client
  const checkContent = () => {
    // Some logic to get the content
    let content = getContent();
    if (content) {
      // Send the content and end the response
      res.write(`data: ${content}\n\n`);
      clearInterval(keepAlive);
      res.end();
    } else {
      // No content yet, try again later
      setTimeout(checkContent, 1000);
    }
  };

  // Start checking for content
  checkContent();
}).listen(8080);
```

This code will keep the connection open by sending a comment every 15 seconds, and check for some content to send back every second. If there is some content, it will send it and end the response. Otherwise, it will keep checking until a timeout occurs.

</details>
